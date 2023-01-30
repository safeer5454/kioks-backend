import { Module } from "@nestjs/common";
import { MerchantsService } from "./merchants.service";
import { MerchantsController } from "./merchants.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Merchant } from "./entities/merchant.entity";
import { BranchModule } from "src/branch/branch.module";
import { MembershipModule } from "src/membership/membership.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant]),
    BranchModule,
    MembershipModule,
  ],
  controllers: [MerchantsController],
  providers: [MerchantsService],
})
export class MerchantsModule {}
