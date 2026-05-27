import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrientacaoService } from './orientacao.service';

// Controlador para orientações
@Controller('Orientacoes')
export class OrientacaoController {
  constructor(private readonly service: OrientacaoService) {}

  // Método para criar uma nova orientação
  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
