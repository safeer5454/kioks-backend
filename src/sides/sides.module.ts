import { Module } from "@nestjs/common";
import { SidesService } from "./sides.service";
import { SidesController } from "./sides.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Side } from "./entities/side.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Side])],
  controllers: [SidesController],
  providers: [SidesService],
})
export class SidesModule {}
