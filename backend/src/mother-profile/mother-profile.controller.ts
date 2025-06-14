import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { MotherProfileService } from './mother-profile.service';
import { CreateMotherProfileDto } from './dto/create-mother-profile.dto';
import { UpdateMotherProfileDto } from './dto/update-mother-profile.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { MotherProfile } from './schemas/mother-profile.schema';

@ApiTags('mother-profiles')
@Controller('mother-profiles')
export class MotherProfileController 
{
    constructor(private readonly motherService: MotherProfileService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new mother profile' })

    @ApiResponse({ status: 201, description: 'The profile has been successfully created.', type: MotherProfile })

    @ApiResponse({ status: 400, description: 'Invalid input data.' })
    create(@Body() createDto: CreateMotherProfileDto): Promise<MotherProfile> {
      return this.motherService.create(createDto);
    }

    @Get()
    @ApiOperation({ summary: 'Retrieve all mother profiles' })
    @ApiResponse({ status: 200, description: 'A list of all profiles.', type: [MotherProfile] })
    findAll(): Promise<MotherProfile[]> {
      return this.motherService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retrieve a single mother profile by ID' })
    @ApiParam({ name: 'id', description: 'The ID of the mother profile' })
    @ApiResponse({ status: 200, description: 'The found profile.', type: MotherProfile })
    @ApiResponse({ status: 404, description: 'Profile not found.' })
    findOne(@Param('id') id: string): Promise<MotherProfile> {
      return this.motherService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a mother profile' })
    @ApiParam({ name: 'id', description: 'The ID of the mother profile to update' })
    @ApiResponse({ status: 200, description: 'The updated profile.', type: MotherProfile })
    @ApiResponse({ status: 404, description: 'Profile not found.' })
    update(
      @Param('id') id: string,
      @Body() updateDto: UpdateMotherProfileDto,
    ): Promise<MotherProfile> {
      return this.motherService.update(id, updateDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a mother profile' })
    @ApiParam({ name: 'id', description: 'The ID of the mother profile to delete' })
    
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: 204, description: 'The profile has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Profile not found.' })
    async remove(@Param('id') id: string): Promise<void> {
      await this.motherService.remove(id);
    }
}