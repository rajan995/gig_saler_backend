import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateResumeDto{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;

    @IsNotEmpty()
    @IsArray()
    @IsString({each:true})
    @ArrayMinSize(3)
    @ApiProperty()
    skills: string[];

    @IsEmpty()
    user: string;
}