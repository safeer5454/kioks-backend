import { Type } from "class-transformer";
import { IsString } from "class-validator";
import { Merchant } from "src/merchants/entities/merchant.entity";

export class CreateIngredientDto {
  @IsString()
  name: string;
  @IsString()
  image: string;
  @Type(() => Merchant)
  merchant: Merchant;
}
