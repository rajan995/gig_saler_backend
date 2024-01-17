import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { GIG_PACKAGE_FIELD_TYPE } from "../schemaEnum";

@Schema()
export class GigPackageFields {
    @Prop({ type: String, required: true })
    key: string;
    @Prop({ type: String, required: true })
    value: string;
    @Prop({ type: String, required: true, enum: GIG_PACKAGE_FIELD_TYPE })
    fieldType: GIG_PACKAGE_FIELD_TYPE;
}

export const GigPackageFieldsSchema = SchemaFactory.createForClass(GigPackageFields);
