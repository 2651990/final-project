import { Test, TestingModule } from '@nestjs/testing';
import { LeasingPackagesService } from './leasing-packages.service';

describe('LeasingPackagesService', () => {
  let service: LeasingPackagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeasingPackagesService],
    }).compile();

    service = module.get<LeasingPackagesService>(LeasingPackagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
