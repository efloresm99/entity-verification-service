import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { VerificationService } from '../services';
import { CreateVerificationDto } from '../dtos';
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
}
