import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Verification {
  @Prop()
  customId: string;

  @Prop({ unique: true })
  verificationId: string;

  @Prop({ type: Date, expires: 600, default: Date.now })
  createdAt: Date;
}

export const VerificationSchema = SchemaFactory.createForClass(Verification);
