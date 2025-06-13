import {
  IsString,
  IsDateString,
  IsOptional,
  IsNumber,
  IsEnum,
  IsNotEmpty,
  ValidateIf,
} from 'class-validator';
import { PregnancyStatus } from '../schemas/mother-profile.schema'; // Adjust the import path if needed

export class CreateMotherProfileDto 
{
  
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsOptional()
    @IsString()
    contact?: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsEnum(PregnancyStatus)
    pregnancyStatus?: PregnancyStatus;

    
    @ValidateIf((o) => o.pregnancyStatus === PregnancyStatus.PREGNANT)
    @IsNotEmpty({ message: 'Expected delivery date is required when pregnant.' })
    @IsDateString()
    expectedDeliveryDate: string; 
}