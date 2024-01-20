import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/createResume.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Resumes } from 'src/schema/resume.schema';
import { Model, isValidObjectId } from 'mongoose';
@Injectable()
export class ResumesService {
    constructor(@InjectModel(Resumes.name) private resumeModel: Model<Resumes>){

    }
    async saveResume(createResumeDto:CreateResumeDto){
        const createResume = new this.resumeModel(createResumeDto);
        const newResume = createResume.save();
        return newResume;
    }
    async getResume() {
        return this.resumeModel.findOne().select(["-updatedAt","-createdAt","-user","-__v","-_id"]);
    }
}
