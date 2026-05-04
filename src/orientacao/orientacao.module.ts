import { Module } from '@nestjs/common';
import { OrientacaoService } from './orientacao.service';
import { OrientacaoController } from './orientacao.controller';

@Module({
  providers: [OrientacaoService],
  controllers: [OrientacaoController]
})
export class OrientacaoModule {}
