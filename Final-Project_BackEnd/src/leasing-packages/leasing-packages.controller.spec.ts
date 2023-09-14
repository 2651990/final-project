import { Test, TestingModule } from '@nestjs/testing';
import { LeasingPackagesController } from './leasing-packages.controller';
import { LeasingPackagesService } from './leasing-packages.service';

describe('LeasingPackagesController', () => {
  let controller: LeasingPackagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeasingPackagesController],
      providers: [LeasingPackagesService],
    }).compile();

    controller = module.get<LeasingPackagesController>(LeasingPackagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
