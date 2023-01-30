import { Module } from "@nestjs/common";
import { KioskService } from "./kiosk.service";
import { KioskController } from "./kiosk.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Kiosk } from "./entities/kiosk.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Kiosk])],
  controllers: [KioskController],
  providers: [KioskService],
})
export class KioskModule {}
