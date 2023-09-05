import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

import { VerificationService } from '../services';
import { CreateVerificationDto, CustomIdDto, VerifyCodeDto } from '../dtos';
import { VerificationDoc } from '../docs';

@Controller()
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}
  @MessagePattern({ cmd: 'create_verification' })
  async createVerification(
    createVerificationDto: CreateVerificationDto,
  ): Promise<VerificationDoc> {
    return this.verificationService.createVerification(createVerificationDto);
  }

  @MessagePattern({ cmd: 'verify' })
  async verifyCode(verificationCode: VerifyCodeDto): Promise<string> {
    return this.verificationService.verifyCode(verificationCode);
  }

  @MessagePattern({ cmd: 'get_verification_by_custom_id' })
  async getVerificationByCustomId(customIdDto: CustomIdDto): Promise<string> {
    return this.verificationService.getOneVerificationByCustomId(
      customIdDto.customId,
    );
  }

  @EventPattern('delete_verification')
  async deleteVerification(verificationCode: VerifyCodeDto): Promise<void> {
    await this.verificationService.deleteCode(verificationCode);
  }
}
