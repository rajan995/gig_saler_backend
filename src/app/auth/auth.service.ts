import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import {  compareSync, hashSync } from 'bcrypt'
import { InjectModel } from '@nestjs/mongoose';
import { Users } from 'src/schema/users.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel(Users.name) private userModel: Model<Users>, private jwtservice: JwtService) {

    }
    async signup(signupDto: SignupDto) {
        const { email, password } = signupDto;

        if (await this.userModel.findOne({ email: email })) {
            throw new HttpException("User already exist. Please login", HttpStatus.FORBIDDEN);
        } else {
            const hashPassword = hashSync(password, 10);
            const createUser = new this.userModel({ ...signupDto, password: hashPassword });
            const saveUser = await createUser.save();
            if (!saveUser) {
                throw new HttpException("something wrong please try after some time", HttpStatus.BAD_REQUEST);
            }
            const token = this.jwtservice.sign({ uuid: saveUser._id, role: saveUser.role })
            return { message :"Signup successfully"};
        }
    }

    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;
        const user = await this.userModel.findOne({ email: email });
        
        if (user && compareSync(password, user.password)) {

            const token = this.jwtservice.sign({ uuid: user._id, role: user.role })
            return { token };
        }
        throw new UnauthorizedException();

    }
}
