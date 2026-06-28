import { Controller, Get, Post, Body } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto/create-paciente.dto';

@Controller('pacientes')
export class PacienteController {
  constructor(private readonly service: PacienteService) {}

  @Post()
  create(@Body() dto: CreatePacienteDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
