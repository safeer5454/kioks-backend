import { Type } from "class-transformer";
import { IsArray, IsNumber, IsString } from "class-validator";
import { Item } from "src/item/entities/item.entity";
import { Kiosk } from "src/kiosk/entities/kiosk.entity";

export class CreateDealDto {
  @IsString()
  image: string;
  @IsString()
  name: string;
  @IsNumber()
  price: number;
  @IsArray()
  @Type(() => Item)
  items: Item[] | string;
  @Type(() => Kiosk)
  kiosk: Kiosk;
}
