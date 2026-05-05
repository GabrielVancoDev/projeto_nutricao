import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paciente } from './paciente.schema';

@Injectable()
export class PacienteService {
  constructor(
    @InjectModel(Paciente.name)
    private pacienteModel: Model<Paciente>,
  ) {}

  async create(data: any) {
    return this.pacienteModel.create(data);
  }

  async findAll() {
    return this.pacienteModel.find().populate('usuarioId');
  }
}