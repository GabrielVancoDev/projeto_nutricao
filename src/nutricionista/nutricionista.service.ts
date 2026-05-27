import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; // Importação do InjectModel
import { Model } from 'mongoose'; // Importação do Model
import { Nutricionista } from './nutricionista.schema'; // Importação do Nutricionista

@Injectable()
export class NutricionistaService {
    constructor(
        @InjectModel(Nutricionista.name)
        private nutricionistaModel: Model<Nutricionista>, // Modelo do Nutricionista
    ) {}

    // Método para criar um novo Nutricionista
    async create(data: any) {
        return this.nutricionistaModel.create(data);
    }

    // Método para buscar todos os Nutricionistas
    async findAll() {
        return this.nutricionistaModel.find().populate('usuarioId');
    }
}
