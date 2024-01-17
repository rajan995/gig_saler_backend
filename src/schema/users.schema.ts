import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {  isEmail } from "class-validator";
import { USER_ROLE_ENUM } from "./schemaEnum";


@Schema({timestamps:true})
export class Users {
    @Prop({ type:String, required: false })
    firstName: string;

    @Prop({type:String, required: false})
    lastName: string;

    @Prop({type:String, required: true,unique:true,validate:{validator:(val)=>isEmail(val),message:'Please enter valid email'} })
    email: string;

    @Prop({type:String, required: true })
    password: string

    @Prop({ type: String, required: true, enum: USER_ROLE_ENUM, default: USER_ROLE_ENUM.USER })
    role: USER_ROLE_ENUM
}

export const UserSchema = SchemaFactory.createForClass(Users);