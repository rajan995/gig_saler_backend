import { Module } from '@nestjs/common';
import { GigsController } from './gigs.controller';
import { GigsService } from './gigs.service';
import { AuthModule } from '../auth/auth.module';
import { SchemaModule } from 'src/schema/schema.module';

@Module({
  controllers: [GigsController],
  providers: [GigsService],
  imports:[AuthModule,SchemaModule]
})
export class GigsModule {}
