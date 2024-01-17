import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';

import { AuthService } from './auth.service';
import { SchemaModule } from 'src/schema/schema.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

const _controllers = [AuthController]

const _providers = [AuthService]

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
]

@Module({
    controllers: [..._controllers],
    providers: [..._providers],
    imports: [..._imports]
})
export class AuthModule { }
