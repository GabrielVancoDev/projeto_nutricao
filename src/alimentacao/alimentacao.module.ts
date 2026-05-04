import { Module } from '@nestjs/common';
import { AlimentacaoService } from './alimentacao.service';
import { AlimentacaoController } from './alimentacao.controller';

@Module({
  providers: [AlimentacaoService],
  controllers: [AlimentacaoController]
})
export class AlimentacaoModule {}
