import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { ExtractJwt,Strategy } from 'passport-jwt';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private authservice: AuthService,  configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get<string>("JWT_SECRET")

        })
      
    }

    async validate(payload: any) {
      
        const { uuid } = payload;
        const user = this.authservice.searchUserById(uuid);
        if (!user) {
              throw new UnauthorizedException()
        }
        return user;
    }
}

