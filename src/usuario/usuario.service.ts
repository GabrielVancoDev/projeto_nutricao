import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from './usuario.schema';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name)
    private usuarioModel: Model<Usuario>,
  ) {}

  async create(data: any) {
    return this.usuarioModel.create(data);
  }

  async findAll() {
    return this.usuarioModel.find();
  }
}