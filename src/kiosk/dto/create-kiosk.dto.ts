import { Type } from "class-transformer";
import { IsString } from "class-validator";
import { Branch } from "src/branch/entities/branch.entity";

export class CreateKioskDto {
  @IsString()
  deviceName: string;
  @IsString()
  location: string;
  @IsString()
  kioskId: number;
  @IsString()
  password: string;
  @Type(() => Branch)
  branch: Branch;
}
