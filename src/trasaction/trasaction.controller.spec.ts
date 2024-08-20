import { Test, TestingModule } from '@nestjs/testing';
import { TrasactionController } from './trasaction.controller';

describe('TrasactionController', () => {
  let controller: TrasactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrasactionController],
    }).compile();

    controller = module.get<TrasactionController>(TrasactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
