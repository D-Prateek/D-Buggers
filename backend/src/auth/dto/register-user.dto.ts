import { IsString, IsNotEmpty, IsEnum, MinLength, IsPhoneNumber } from 'class-validator';
import { BloodGroup } from '../../user/schemas/user.schema';

export class RegisterUserDto 
{
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsNotEmpty()
    @IsPhoneNumber('NP')
    phoneNumber: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters long.' })
    password: string;
    
    @IsNotEmpty()
    @IsEnum(BloodGroup)
    bloodGroup: BloodGroup;


}