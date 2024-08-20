import { Test, TestingModule } from '@nestjs/testing';
import { TrasactionService } from './trasaction.service';

describe('TrasactionService', () => {
  let service: TrasactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrasactionService],
    }).compile();

    service = module.get<TrasactionService>(TrasactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
