import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PregnancyProfileService } from './pregnancy-profile.service';
import { CreatePregnancyProfileDto } from './dto/create-pregnancy-profile.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pregnancy Profile')
@ApiBearerAuth() 
@Controller('pregnancy-profile')
export class PregnancyProfileController {
  constructor(private readonly profileService: PregnancyProfileService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Create or update a user\'s pregnancy profile' })
  @ApiResponse({ status: 201, description: 'The profile has been successfully created/updated.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  create(@Body() createDto: CreatePregnancyProfileDto, @Req() req) {

    const userId = req.user._id;
    return this.profileService.createOrUpdate(createDto, userId);
  }
}
