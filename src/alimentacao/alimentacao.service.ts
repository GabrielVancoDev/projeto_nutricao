import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Alimentacao } from './alimentacao.schema';

@Injectable()
export class AlimentacaoService {
  constructor(
    // Injeção do Model
    @InjectModel(Alimentacao.name)
    private alimentacaoModel: Model<Alimentacao>,
  ) {}

  // Método para criar uma nova alimentação
  async create(data: any) {
    return this.alimentacaoModel.create(data);
  }

  // Método para buscar todas as alimentações
  async findAll() {
    return this.alimentacaoModel.find().populate('pacienteId');
  }
}
