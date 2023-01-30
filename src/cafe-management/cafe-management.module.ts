import { Module } from '@nestjs/common';
import { CafeManagementService } from './cafe-management.service';
import { CafeManagementController } from './cafe-management.controller';

@Module({
  controllers: [CafeManagementController],
  providers: [CafeManagementService]
})
export class CafeManagementModule {}
