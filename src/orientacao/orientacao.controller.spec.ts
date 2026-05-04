import { Test, TestingModule } from '@nestjs/testing';
import { OrientacaoController } from './orientacao.controller';

describe('OrientacaoController', () => {
  let controller: OrientacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrientacaoController],
    }).compile();

    controller = module.get<OrientacaoController>(OrientacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
