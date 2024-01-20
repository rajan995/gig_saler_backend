import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Users } from "./users.schema";

@Schema({ timestamps: true })
export class Resumes extends Document {
    @Prop({ type: String, required: false })
    firstName: string;

    @Prop({ type: String, required: false })
    lastName: string;

    @Prop({ type: String, required: true })
    title: string;

    @Prop({ type: [String], required: true })
    skills: string[]

    @Prop({ type: mongoose.Types.ObjectId, ref: Users.name, required: true })
    user: Users
}

export const ResumesSchema = SchemaFactory.createForClass(Resumes);