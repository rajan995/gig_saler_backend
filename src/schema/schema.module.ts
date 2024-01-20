import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, Users } from './users.schema';
import { GigSchema, Gigs } from './gigs/gigs.schema';
import { Resumes, ResumesSchema } from './resume.schema';

const _schema = [{
    name: Users.name,
    schema: UserSchema
},
{
    name: Gigs.name,
    schema: GigSchema
},
{
    name: Resumes.name,
    schema: ResumesSchema
}
];

const _import = [MongooseModule.forFeature(_schema)]
const _export = [MongooseModule]
@Module({
    imports: [..._import],
    exports: [..._export]
})
export class SchemaModule { }
