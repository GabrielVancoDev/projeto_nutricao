import { Test, TestingModule } from '@nestjs/testing';
import { AlimentacaoService } from './alimentacao.service';

describe('AlimentacaoService', () => {
  let service: AlimentacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlimentacaoService],
    }).compile();

    service = module.get<AlimentacaoService>(AlimentacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
