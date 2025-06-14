import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../user/schemas/user.schema';

export type PregnancyProfileDocument = PregnancyProfile & Document;

@Schema({ timestamps: true })
export class PregnancyProfile {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true, unique: true })
  user: User;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  dateOfBirth: Date;
  
  @Prop({ required: true })
  email: string;
  
  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  trimester: string;

  @Prop({ required: true })
  dueDate: Date;

  @Prop({ required: true })
  bloodGroup: string;

  @Prop()
  medicalConditions?: string;

  @Prop()
  allergies?: string;
  
  @Prop()
  medications?: string;
}

export const PregnancyProfileSchema = SchemaFactory.createForClass(PregnancyProfile);
