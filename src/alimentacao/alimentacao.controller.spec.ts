import { Test, TestingModule } from '@nestjs/testing';
import { AlimentacaoController } from './alimentacao.controller';

describe('AlimentacaoController', () => {
  let controller: AlimentacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlimentacaoController],
    }).compile();

    controller = module.get<AlimentacaoController>(AlimentacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
