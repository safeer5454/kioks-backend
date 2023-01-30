import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { PACKAGE_TYPE } from "src/common/enums";
import { i18nValidationMessage } from "nestjs-i18n";
import { Merchant } from "src/merchants/entities/merchant.entity";

export class CreateMembershipDto {
  @IsEnum(PACKAGE_TYPE, {
    message: i18nValidationMessage("validation.INVALID_ENUM"),
  })
  packageName: PACKAGE_TYPE;
  @IsNumber()
  numberOfBranches: number;
  @IsNumber()
  invoicePerMonth: number;
}
