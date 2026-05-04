import { Test, TestingModule } from '@nestjs/testing';
import { OrientacaoService } from './orientacao.service';

describe('OrientacaoService', () => {
  let service: OrientacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrientacaoService],
    }).compile();

    service = module.get<OrientacaoService>(OrientacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
