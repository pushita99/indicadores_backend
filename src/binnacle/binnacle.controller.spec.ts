import { Test, TestingModule } from '@nestjs/testing';
import { BinnacleController } from './binnacle.controller';
import { BinnacleService } from './binnacle.service';

describe('BinnacleController', () => {
  let controller: BinnacleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BinnacleController],
      providers: [BinnacleService],
    }).compile();

    controller = module.get<BinnacleController>(BinnacleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
