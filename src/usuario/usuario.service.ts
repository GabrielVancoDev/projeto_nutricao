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

  // Buscar por e-mail
  async findByEmail(email: string) {
    return this.usuarioModel.findOne({ email });
  }
  async findAll() {
    return this.usuarioModel.find();
  }
}
