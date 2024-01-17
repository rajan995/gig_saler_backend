import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {  GIG_PACKAGE_TYPE } from "../schemaEnum";


@Schema()
export class GigsPackages {

    @Prop({ type: String, required: true, enum: GIG_PACKAGE_TYPE })
    packageType: GIG_PACKAGE_TYPE;
    @Prop({ type: Number, required: true })
    price: number;
}

export const GigsPackagesSchema = SchemaFactory.createForClass(GigsPackages);



