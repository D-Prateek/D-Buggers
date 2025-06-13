import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MotherProfileService } from './mother-profile.service';
import { MotherProfileController } from './mother-profile.controller';
import { MotherProfile, MotherProfileSchema } from './schemas/mother-profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MotherProfile.name, schema: MotherProfileSchema },
    ]),
  ],
  controllers: [MotherProfileController],
  providers: [MotherProfileService],
})
export class MotherProfileModule {}