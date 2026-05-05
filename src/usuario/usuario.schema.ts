import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Usuario {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  senha: string;

  @Prop({ required: true })
  tipoUsuario: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
