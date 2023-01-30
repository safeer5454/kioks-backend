import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { Kiosk } from "src/kiosk/entities/kiosk.entity";
import { Merchant } from "src/merchants/entities/merchant.entity";

export class CreateExtraDto {
  @IsString()
  name: string;
  @IsNumber()
  price: number;
  @IsString()
  image: string;
  @Type(() => Merchant)
  merchant: Merchant;
}
