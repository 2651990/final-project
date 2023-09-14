import { Test, TestingModule } from '@nestjs/testing';
import { LeasingItemsController } from './leasing-items.controller';
import { LeasingItemsService } from './leasing-items.service';

describe('LeasingItemsController', () => {
  let controller: LeasingItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeasingItemsController],
      providers: [LeasingItemsService],
    }).compile();

    controller = module.get<LeasingItemsController>(LeasingItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
