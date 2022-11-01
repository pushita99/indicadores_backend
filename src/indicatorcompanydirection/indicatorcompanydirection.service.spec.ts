import { Test, TestingModule } from '@nestjs/testing';
import { IndicatorcompanydirectionService } from './indicatorcompanydirection.service';

describe('IndicatorcompanydirectionService', () => {
  let service: IndicatorcompanydirectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndicatorcompanydirectionService],
    }).compile();

    service = module.get<IndicatorcompanydirectionService>(IndicatorcompanydirectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
