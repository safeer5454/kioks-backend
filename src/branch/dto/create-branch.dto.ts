import { Type } from "class-transformer";
import { IsString } from "class-validator";
import { Merchant } from "src/merchants/entities/merchant.entity";

export class CreateBranchDto {
  @IsString()
  branchName: string;
  // @IsString()
  @Type(() => Merchant)
  merchant: Merchant;
}
