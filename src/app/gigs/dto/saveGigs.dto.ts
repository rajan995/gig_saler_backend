import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class SaveGigDto{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    category: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    serviceType: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    metadata: string[];

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    searchtage: string[];
}