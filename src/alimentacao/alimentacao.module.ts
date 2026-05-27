import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Alimentacao, AlimentacaoSchema } from './alimentacao.schema'; // Importação do Alimentacao
import { AlimentacaoService } from './alimentacao.service';
import { AlimentacaoController } from './alimentacao.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Alimentacao.name,
        schema: AlimentacaoSchema,
      },
    ])
  ],
  providers: [AlimentacaoService],
  controllers: [AlimentacaoController],
})
export class AlimentacaoModule {}
