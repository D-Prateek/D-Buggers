import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class LoginUserDto 
{
    @IsNotEmpty()
    @IsPhoneNumber('NP')
    phoneNumber: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    
}