import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlimentacaoService } from './alimentacao.service';

@Controller('alimentacoes')
export class AlimentacaoController {
  constructor(private readonly service: AlimentacaoService) {}

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
