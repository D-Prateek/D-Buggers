import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export enum BloodGroup {
  A_POSITIVE = 'A+',
  A_NEGATIVE = 'A-',
  B_POSITIVE = 'B+',
  B_NEGATIVE = 'B-',
  AB_POSITIVE = 'AB+',
  AB_NEGATIVE = 'AB-',
  O_POSITIVE = 'O+',
  O_NEGATIVE = 'O-',
}

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User 
{
    @Prop({ required: true })
    fullName: string;

    @Prop({ required: true, unique: true })
    phoneNumber: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true })
    password: string;

    @Prop({ type: String, enum: Object.values(BloodGroup), required: true })
    bloodGroup: BloodGroup;

    @Prop()
    passwordResetToken?: string;

    @Prop()
    passwordResetExpires?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<UserDocument>('save', async function (next) 
{
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});