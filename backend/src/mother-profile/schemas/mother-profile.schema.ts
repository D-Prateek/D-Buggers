import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MotherProfileDocument = MotherProfile & Document;

@Schema()
export class MotherProfile {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  contact: string;

  @Prop()
  address: string;

  @Prop()
  isPregnant: boolean;

  @Prop()
  expectedDeliveryDate: Date;
}

export const MotherProfileSchema = SchemaFactory.createForClass(MotherProfile);
