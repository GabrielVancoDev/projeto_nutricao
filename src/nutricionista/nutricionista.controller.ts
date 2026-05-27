import { Controller, Get, Post, Body } from '@nestjs/common';
import { NutricionistaService } from './nutricionista.service';

@Controller('nutricionista')
export class NutricionistaController {
  // Controlador para Nutricionistas
  constructor(private readonly service: NutricionistaService) {}

  // Método para criar um novo Nutricionista
  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  // Método para buscar todos os Nutricionistas
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
