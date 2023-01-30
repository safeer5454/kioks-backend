import { Type } from "class-transformer";
import { IsBoolean, IsEnum, IsNumber, IsString } from "class-validator";
import { Category } from "src/categories/entities/category.entity";
import { CATEGORY_TYPE, ITEM_TYPE, SIZE_TYPE } from "src/common/enums";
import { Extra } from "src/extras/entities/extra.entity";
import { Ingredient } from "src/ingredients/entities/ingredient.entity";
import { Side } from "src/sides/entities/side.entity";

export class CreateItemDto {
  @IsString()
  image: string;
  @IsString()
  name: string;
  @IsNumber()
  price: number;
  @Type(() => Category)
  category: Category;
  @IsBoolean()
  mostSelling: boolean;
  @IsEnum(SIZE_TYPE)
  size: SIZE_TYPE;
  @IsBoolean()
  status: boolean;
  @Type(() => Extra)
  extras: Extra[] | string;
  @Type(() => Side)
  side: Side[] | string;
  @Type(() => Ingredient)
  ingredients: Ingredient[] | string;
}
