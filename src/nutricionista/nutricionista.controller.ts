import { Controller, Get, Post, Body } from '@nestjs/common';
import { NutricionistaService } from './nutricionista.service';
import { CreateNutricionistaDto } from './dto/create-nutricionista.dto';

@Controller('nutricionistas')
export class NutricionistaController {
  // Controlador para Nutricionistas
  constructor(private readonly service: NutricionistaService) {}

  // Método para criar um novo Nutricionista
  @Post()
  create(@Body() dto: CreateNutricionistaDto) {
    return this.service.create(dto);
  }

  // Método para buscar todos os Nutricionistas
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
