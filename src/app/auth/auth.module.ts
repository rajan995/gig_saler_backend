import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';

import { AuthService } from './auth.service';
import { SchemaModule } from 'src/schema/schema.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

const _controllers = [AuthController]

const _providers = [AuthService, JwtStrategy]

const _imports = [SchemaModule, JwtModule.registerAsync({

    inject: [ConfigService],

    useFactory: (config: ConfigService) => {
      
        return {
            secret: config.get<string>("JWT_SECRET"),
            signOptions: {
                expiresIn: config.get<string | number>("JWT_EXPIRE"),
            }
        }
    },
}),
    PassportModule.register({ defaultStrategy: 'jwt' })
]
const _exports = [AuthService, JwtStrategy,PassportModule,JwtModule];

@Module({
    controllers: [..._controllers],
    providers: [..._providers],
    imports: [..._imports],
    exports: [..._exports]
})
export class AuthModule { }
