import { Test, TestingModule } from '@nestjs/testing';
import { CafeManagementController } from './cafe-management.controller';
import { CafeManagementService } from './cafe-management.service';

describe('CafeManagementController', () => {
  let controller: CafeManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CafeManagementController],
      providers: [CafeManagementService],
    }).compile();

    controller = module.get<CafeManagementController>(CafeManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
