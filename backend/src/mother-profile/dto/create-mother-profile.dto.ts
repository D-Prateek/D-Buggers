import { IsString, IsBoolean, IsDateString, IsOptional, IsNumber } from 'class-validator';

export class CreateMotherProfileDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  @IsString()
  contact?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsBoolean()
  isPregnant?: boolean;

  @IsOptional()
  @IsDateString()
  expectedDeliveryDate?: string;
}
