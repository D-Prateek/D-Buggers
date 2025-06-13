import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController 
{
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    @ApiOperation({ summary: 'Register a new user' })
    @ApiResponse({ status: 201, description: 'User successfully registered.'})
    @ApiResponse({ status: 409, description: 'User with this phone number already exists.'})
    register(@Body() registerDto: RegisterUserDto) {
        return this.authService.register(registerDto);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Log in a user' })
    @ApiResponse({ status: 200, description: 'User successfully logged in.'})
    @ApiResponse({ status: 401, description: 'Invalid credentials.'})
    login(@Body() loginDto: LoginUserDto) {
        return this.authService.login(loginDto);
    }
}