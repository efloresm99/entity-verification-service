import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Verification, VerificationSchema } from './schemas';
import { VerificationService } from './services';
import { VerificationController } from './controllers';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Verification.name, schema: VerificationSchema },
    ]),
  ],
  controllers: [VerificationController],
  providers: [VerificationService],
})
export class VerificationModule {}
