import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Gigs } from 'src/schema/gigs/gigs.schema';
import { SaveGigDto } from './dto/saveGigs.dto';

@Injectable()
export class GigsService {
    constructor(@InjectModel(Gigs.name) private gigModule: Model<Gigs>) {

    }
    async saveGigs(getGigDto: SaveGigDto) {
        const saveGig = new this.gigModule(getGigDto);
        const newGig = saveGig.save();
        return newGig;
    }

    async getGigs() {
        return this.gigModule.find();
    }

    async getGigById(id: string) {
        if (!isValidObjectId(id)) {
            throw new HttpException("Please enter valid id", HttpStatus.BAD_REQUEST);
        }
        const gig = await this.gigModule.findById(id);
        if (!gig) {
            throw new HttpException("No record found", HttpStatus.BAD_REQUEST);
        }
        return gig;
    }

    async updateGig(id: string, saveGigDto: SaveGigDto) {
        if (!isValidObjectId(id)) {
            throw new HttpException("Please enter valid id", HttpStatus.BAD_REQUEST);
        }
        return  this.gigModule.findByIdAndUpdate(id, saveGigDto);

    }

    async deleteGig(id: string) {
        if (!isValidObjectId(id)) {
            throw new HttpException("Please enter valid id", HttpStatus.BAD_REQUEST);
        }
        return   this.gigModule.findByIdAndDelete(id);
    }
}
