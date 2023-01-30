import { Type } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";
import { Membership } from "src/membership/entities/membership.entity";

export class CreateMerchantDto {
  @IsString()
  cafeName: string;
  @IsString()
  ownerName: string;
  @IsString()
  email: string;
  @IsNumber()
  phoneNumber: number;
  @IsString()
  city: string;
  @IsString()
  address: string;
  @IsNumber()
  vatNumber: number;
  @IsNumber()
  zipCode: number;
  @IsString()
  userName: string;
  @IsString()
  password: string;
  @Type(() => Membership)
  membership: Membership;
  @IsDate()
  startDate: Date;
  @IsDate()
  endDate: Date;
}
