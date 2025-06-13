import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MotherProfile, MotherProfileDocument, PregnancyStatus } from './schemas/mother-profile.schema'; // Import PregnancyStatus
import { CreateMotherProfileDto } from './dto/create-mother-profile.dto';
import { UpdateMotherProfileDto } from './dto/update-mother-profile.dto';

@Injectable()
export class MotherProfileService 
{
    constructor(
      @InjectModel(MotherProfile.name)
      private motherModel: Model<MotherProfileDocument>,
    ) {}

    async create(createDto: CreateMotherProfileDto): Promise<MotherProfile> {
      const created = new this.motherModel(createDto);
      return created.save();
    }

    async findAll(): Promise<MotherProfile[]> {
      return this.motherModel.find().exec();
    }

    async findOne(id: string): Promise<MotherProfile> {
      const mother = await this.motherModel.findById(id).exec();
      if (!mother) {
        throw new NotFoundException(`Mother with ID ${id} not found`);
      }
      return mother;
    }

    async update(id: string, updateDto: UpdateMotherProfileDto): Promise<MotherProfile> {

      if (updateDto.pregnancyStatus && updateDto.pregnancyStatus !== PregnancyStatus.PREGNANT) {
          
          updateDto['$unset'] = { expectedDeliveryDate: 1 };
      }

      const updated = await this.motherModel.findByIdAndUpdate(id, updateDto, {
        new: true,
      }).exec();

      if (!updated) {
        throw new NotFoundException(`Mother with ID ${id} not found`);
      }
      return updated;
    }

    async remove(id: string): Promise<void> {
      const result = await this.motherModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException(`Mother with ID ${id} not found`);
      }
    }
}