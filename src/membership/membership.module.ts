import { Module } from "@nestjs/common";
import { MembershipService } from "./membership.service";
import { MembershipController } from "./membership.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Membership } from "./entities/membership.entity";
import { BranchModule } from "src/branch/branch.module";

@Module({
  imports: [TypeOrmModule.forFeature([Membership]), BranchModule],
  controllers: [MembershipController],
  providers: [MembershipService],
  exports: [MembershipService],
})
export class MembershipModule {}
