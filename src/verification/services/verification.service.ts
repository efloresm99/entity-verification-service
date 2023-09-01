import { Injectable } from '@nestjs/common';
import * as nodeCrypto from 'node:crypto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Verification } from '../schemas';
import { CreateVerificationDto } from '../dtos';
import { ValidationEnum } from '../enums';
import { VerificationDoc } from '../docs';

@Injectable()
export class VerificationService {
  constructor(
    @InjectModel(Verification.name)
    private verificationModel: Model<Verification>,
  ) {}

  async createVerification(
    createVerificationDto: CreateVerificationDto,
  ): Promise<VerificationDoc | null> {
    const { customId, format } = createVerificationDto;
    if (!customId) {
      return null;
    }
    const verificationId = this.createVerificationCode(format);
    const verification = new this.verificationModel({
      customId,
      verificationId,
    });
    try {
      await verification.save();
      return {
        customId,
        verificationId,
      };
    } catch (err) {
      return null;
    }
  }

  private createVerificationCode(format: ValidationEnum): string {
    switch (format) {
      case ValidationEnum.UUID: {
        return nodeCrypto.randomUUID();
      }
      case ValidationEnum.DIGITS: {
        return nodeCrypto.randomInt(100000, 999999).toString();
      }
      case ValidationEnum.STRING: {
        return nodeCrypto.randomBytes(32).toString('hex');
      }
      default: {
        return nodeCrypto.randomUUID();
      }
    }
  }
}
