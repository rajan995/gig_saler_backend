import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Gigs {
    @Prop()
    title: string;
    @Prop()
    category: string;
    @Prop()
    serviceType: string;
    @Prop()
    metadata: string[]
    @Prop()
    searchtage: string[]

}

export const GigSchema = SchemaFactory.createForClass(Gigs);

