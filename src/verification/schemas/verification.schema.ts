import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Verification {
  @Prop()
  customId: string;

  @Prop({ unique: true })
  verificationId: string;
}

export const VerificationSchema = SchemaFactory.createForClass(Verification);
