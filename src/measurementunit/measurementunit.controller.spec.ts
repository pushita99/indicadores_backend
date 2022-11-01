import { Test, TestingModule } from '@nestjs/testing';
import { MeasurementunitController } from './measurementunit.controller';
import { MeasurementunitService } from './measurementunit.service';

describe('MeasurementunitController', () => {
  let controller: MeasurementunitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeasurementunitController],
      providers: [MeasurementunitService],
    }).compile();

    controller = module.get<MeasurementunitController>(MeasurementunitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
