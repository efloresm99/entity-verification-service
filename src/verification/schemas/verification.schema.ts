import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Verification {
  @Prop()
  customId: string;

  @Prop({ unique: true })
  verificationId: string;

  @Prop({ default: Date.now(), expires: 600 })
  createdAt: Date;
}

export const VerificationSchema = SchemaFactory.createForClass(Verification);
