import { Controller, Get, Post, Body } from '@nestjs/common';
import { PacienteService } from './paciente.service';

@Controller('pacientes')
export class PacienteController {
  constructor(private readonly service: PacienteService) {}

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
