import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlimentacaoService } from './alimentacao.service';
import { CreateAlimentacaoDto } from './dto/create-alimentacao.dto';

@Controller('alimentacoes')
export class AlimentacaoController {
  constructor(private readonly service: AlimentacaoService) {}

  @Post()
  create(@Body() dto: CreateAlimentacaoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
