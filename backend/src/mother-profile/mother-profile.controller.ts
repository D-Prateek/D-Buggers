import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MotherProfileService } from './mother-profile.service';
import { CreateMotherProfileDto } from './dto/create-mother-profile.dto';
import { UpdateMotherProfileDto } from './dto/update-mother-profile.dto';

@Controller('mother-profiles')
export class MotherProfileController {
  constructor(private readonly motherService: MotherProfileService) {}

  @Post()
  create(@Body() createDto: CreateMotherProfileDto) {
    return this.motherService.create(createDto);
  }

  @Get()
  findAll() {
    return this.motherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motherService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateMotherProfileDto,
  ) {
    return this.motherService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motherService.remove(id);
  }
}
