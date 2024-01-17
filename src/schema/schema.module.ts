import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, Users } from './users.schema';
import { GigSchema, Gigs } from './gigs/gigs.schema';

const _schema = [{
    name: Users.name,
    schema: UserSchema
},
{
    name:Gigs.name,
    schema:GigSchema
}];

const _import = [MongooseModule.forFeature(_schema)] 
const _export = [MongooseModule] 
@Module({
    imports: [..._import],
    exports:[..._export]
})
export class SchemaModule { }
