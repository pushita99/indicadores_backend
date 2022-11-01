import { Test, TestingModule } from '@nestjs/testing';
import { IndicatorcompanydirectionController } from './indicatorcompanydirection.controller';
import { IndicatorcompanydirectionService } from './indicatorcompanydirection.service';

describe('IndicatorcompanydirectionController', () => {
  let controller: IndicatorcompanydirectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndicatorcompanydirectionController],
      providers: [IndicatorcompanydirectionService],
    }).compile();

    controller = module.get<IndicatorcompanydirectionController>(IndicatorcompanydirectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
