import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/schemas/user.schema';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService 
{
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    async register(registerDto: RegisterUserDto): Promise<Omit<User, 'password'>> {
        const existingUser = await this.userModel.findOne({ phoneNumber: registerDto.phoneNumber }).exec();
        if (existingUser) {
        throw new ConflictException('A user with this phone number already exists.');
        }
        
        const createdUser = new this.userModel(registerDto);
        const savedUser = await createdUser.save();
        
        const { password, ...result } = savedUser.toObject();
        return result;
    }

    async login(loginDto: LoginUserDto): Promise<any> {
        const user = await this.userModel.findOne({ phoneNumber: loginDto.phoneNumber }).exec();
        if (!user) {
        throw new UnauthorizedException('Invalid credentials.');
        }

        const isPasswordMatching = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordMatching) {
        throw new UnauthorizedException('Invalid credentials.');
        }
        
        const { password, ...result } = user.toObject();
        return {
            message: "Login successful",
            user: result
        };
    }
}