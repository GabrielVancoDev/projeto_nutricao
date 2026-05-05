import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Paciente {
  @Prop({ required: true })
  peso: number;

  @Prop({ required: true })
  altura: number;

  @Prop({ required: true })
  idade: number;

  @Prop({ type: String, ref: 'Usuario', required: true })
  usuarioId: string;
}

export const PacienteSchema = SchemaFactory.createForClass(Paciente);

