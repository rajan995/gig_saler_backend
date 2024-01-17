import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @Length(6, 50, { message: 'Password length Must be between 6 and 50 charcters', })
    password: string;
}