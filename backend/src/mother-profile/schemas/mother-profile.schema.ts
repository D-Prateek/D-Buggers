import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export enum PregnancyStatus {
  PREGNANT = 'pregnant',
  POST_MATERNAL = 'post-maternal',
  NONE = 'none',
}

export type MotherProfileDocument = MotherProfile & Document;

@Schema({ timestamps: true })
export class MotherProfile {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  contact: string;

  @Prop()
  address: string;

  @Prop({
    type: String,
    enum: Object.values(PregnancyStatus), 
    default: PregnancyStatus.NONE,
  })
  pregnancyStatus: PregnancyStatus;

  @Prop({ type: Date, required: false })
  expectedDeliveryDate: Date;
}

export const MotherProfileSchema = SchemaFactory.createForClass(MotherProfile);