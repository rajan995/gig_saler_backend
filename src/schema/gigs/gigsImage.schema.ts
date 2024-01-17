import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class GigsImages{
 @Prop()
 url:string;

 @Prop()
 tags:string
}

export const GigImagesSchema = SchemaFactory.createForClass(GigsImages);

