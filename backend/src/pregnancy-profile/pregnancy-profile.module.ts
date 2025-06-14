import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PregnancyProfileService } from './pregnancy-profile.service';
import { PregnancyProfileController } from './pregnancy-profile.controller';
import { PregnancyProfile, PregnancyProfileSchema } from './schemas/pregnancy-profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PregnancyProfile.name, schema: PregnancyProfileSchema },
    ]),
  ],
  controllers: [PregnancyProfileController],
  providers: [PregnancyProfileService],
})
export class PregnancyProfileModule {}
