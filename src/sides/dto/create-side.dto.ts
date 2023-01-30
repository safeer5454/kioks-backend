import { Type } from "class-transformer";
import { IsEnum, IsString } from "class-validator";
import { i18nValidationMessage } from "nestjs-i18n";
import { Branch } from "src/branch/entities/branch.entity";
import { SIDE_TYPE } from "src/common/enums";
import { Item } from "src/item/entities/item.entity";
import { Kiosk } from "src/kiosk/entities/kiosk.entity";

export class CreateSideDto {
  @IsEnum(SIDE_TYPE, {
    message: i18nValidationMessage("validation.INVALID_ENUM"),
  })
  type: SIDE_TYPE;
  @Type(() => Item)
  items: Item[];
  @Type(() => Kiosk)
  kiosk: Kiosk;
}
