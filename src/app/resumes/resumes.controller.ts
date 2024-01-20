import { Body, Controller, Delete, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { CreateResumeDto } from './dto/createResume.dto';
import { ResumesService } from './resumes.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('resumes')
export class ResumesController {
    constructor(private resumeService:ResumesService){

    }
    @Post()
    @UseGuards(AuthGuard())
    async saveResume(@Body() createResumeDto: CreateResumeDto, @Req() req: any) {
        console.log(req.user);
        return await this.resumeService.saveResume({...createResumeDto,user:req.user._id});
    }

    @Get()
    async getGigs() {
        return await this.resumeService.getResume();
    }


}
