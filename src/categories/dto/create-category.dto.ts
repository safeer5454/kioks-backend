import { Type } from "class-transformer";
import { IsString } from "class-validator";
import { Kiosk } from "src/kiosk/entities/kiosk.entity";

export class CreateCategoryDto {
  @IsString()
  name: string;
  @Type(() => Kiosk)
  kiosk: Kiosk[];
}
