import { PartialType } from '@nestjs/mapped-types';
import { CreateMotherProfileDto } from './create-mother-profile.dto';

export class UpdateMotherProfileDto extends PartialType(CreateMotherProfileDto) {}
