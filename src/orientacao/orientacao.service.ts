import { Injectable } from '@nestjs/common'; // Importação do Injectable
import { InjectModel } from '@nestjs/mongoose'; // Importação do InjectModel
import { Model } from 'mongoose'; // Importação do Model
import { Orientacao } from './orientacao.schema'; // Importação do Orientacao

@Injectable()
export class OrientacaoService {
    constructor(
        @InjectModel(Orientacao.name)
        private orientacaoModel: Model<Orientacao>,
    ) {}

    // Método para criar uma nova orientação
    async create(data: any) {
        return this.orientacaoModel.create(data);
    }

    // Método para buscar todas as orientações
    async findAll() {
        return this.orientacaoModel.find().populate('nutricionistaId');
    }
}
