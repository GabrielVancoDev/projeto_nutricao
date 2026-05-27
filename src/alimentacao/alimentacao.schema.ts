import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// Criação do Schema
@Schema()
export class Alimentacao {
  // Definição dos campos
  @Prop({ required: true })
  refeicao: string;

  @Prop({ required: true })
  calorias: number;

  @Prop({ required: true })
  horario: string;

  @Prop({
    type: String,
    ref: 'Paciente',
    required: true,
  })
  pacienteId: string;
}

export const AlimentacaoSchema = SchemaFactory.createForClass(Alimentacao);
