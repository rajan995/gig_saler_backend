import { Module } from '@nestjs/common';
import { ResumesController } from './resumes.controller';
import { SchemaModule } from 'src/schema/schema.module';
import { ResumesService } from './resumes.service';

@Module({
    controllers:[ResumesController],
    providers:[ResumesService],
     imports:[SchemaModule]
})
export class ResumesModule {}
