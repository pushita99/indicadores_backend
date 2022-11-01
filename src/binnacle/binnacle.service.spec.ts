import { Test, TestingModule } from '@nestjs/testing';
import { BinnacleService } from './binnacle.service';

describe('BinnacleService', () => {
  let service: BinnacleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BinnacleService],
    }).compile();

    service = module.get<BinnacleService>(BinnacleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
