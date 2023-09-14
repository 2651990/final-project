import { Test, TestingModule } from '@nestjs/testing';
import { LeasingItemsService } from './leasing-items.service';

describe('LeasingItemsService', () => {
  let service: LeasingItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeasingItemsService],
    }).compile();

    service = module.get<LeasingItemsService>(LeasingItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
