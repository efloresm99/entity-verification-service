import { IsEnum, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

import { ValidationEnum } from '../enums';

export class CreateVerificationDto {
  @IsString()
  @Transform(({ value }) => value?.toString())
  customId: any;

  @IsEnum(ValidationEnum)
  format: ValidationEnum;
}
