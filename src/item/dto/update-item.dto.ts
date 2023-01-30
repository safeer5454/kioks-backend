import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";
import { CreateItemDto } from "./create-item.dto";

export class UpdateItemDto extends PartialType(CreateItemDto) {
  //   @IsString()
  //   readonly id: string;
}
