import {Module} from '@nestjs/common';
import {OrientacaoService} from './orientacao.service';
import {OrientacaoController} from './orientacao.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Orientacao, OrientacaoSchema} from './orientacao.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Orientacao.name, schema: OrientacaoSchema}])],
  controllers: [OrientacaoController],
  providers: [OrientacaoService],
})
export class OrientacaoModule {}