import { Test, TestingModule } from '@nestjs/testing';
import { CafeManagementService } from './cafe-management.service';

describe('CafeManagementService', () => {
  let service: CafeManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafeManagementService],
    }).compile();

    service = module.get<CafeManagementService>(CafeManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
