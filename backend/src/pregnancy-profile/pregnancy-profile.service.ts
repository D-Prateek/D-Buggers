import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PregnancyProfile, PregnancyProfileDocument } from './schemas/pregnancy-profile.schema';
import { CreatePregnancyProfileDto } from './dto/create-pregnancy-profile.dto';

@Injectable()
export class PregnancyProfileService {
  constructor(
    @InjectModel(PregnancyProfile.name)
    private profileModel: Model<PregnancyProfileDocument>,
  ) {}

  async createOrUpdate(createDto: CreatePregnancyProfileDto, userId: string): Promise<PregnancyProfile> {
    const existingProfile = await this.profileModel.findOne({ user: userId }).exec();

    if (existingProfile) {
      Object.assign(existingProfile, createDto);
      return existingProfile.save();
    } else {
      const profileData = { ...createDto, user: userId };
      const createdProfile = new this.profileModel(profileData);
      return createdProfile.save();
    }
  }
}
