import { Test, TestingModule } from '@nestjs/testing';
import { MeasurementunitService } from './measurementunit.service';

describe('MeasurementunitService', () => {
  let service: MeasurementunitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeasurementunitService],
    }).compile();

    service = module.get<MeasurementunitService>(MeasurementunitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
