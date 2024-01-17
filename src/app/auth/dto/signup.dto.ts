import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { USER_ROLE_ENUM } from "src/schema/schemaEnum";

export class SignupDto {
    @IsOptional()
    @IsString()
    @ApiProperty()
    firstName: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string;
   
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @Length(6, 50, { message: 'Password length Must be between 6 and 50 charcters', })
    password: string;
    
    @IsOptional()
    @ApiProperty()
    @IsEnum(USER_ROLE_ENUM)
    role: USER_ROLE_ENUM
}