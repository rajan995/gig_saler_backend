import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { SaveGigDto } from './dto/saveGigs.dto';
import { GigsService } from './gigs.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('gigs')
export class GigsController {
    constructor(private gigsService: GigsService) {

    }

    @Post()
    @UseGuards(AuthGuard())
    async saveGig(@Body() getGigDto: SaveGigDto, @Req() req: any) {
        console.log(req.user);
        return await this.gigsService.saveGigs(getGigDto);
    }

    @Get()
    async getGigs() {
        return await this.gigsService.getGigs();
    }

    @Get(":id")
    async getGigbyId(@Param() id: string) {
        return await this.gigsService.getGigById(id);
    }

    @UseGuards(AuthGuard())
    @Patch(":id")
    async updateGig(@Param('id') id: string, @Body() saveGigDto: SaveGigDto) {
        return await this.gigsService.updateGig(id, saveGigDto);
    }

    @UseGuards(AuthGuard())
    @Delete()
    async deleteGig(@Param("id") id: string) {

        return await this.gigsService.deleteGig(id);
    }

}
