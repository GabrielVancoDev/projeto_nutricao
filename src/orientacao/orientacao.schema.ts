import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema() // Decorator do Mongoose
export class Orientacao {
  // Propriedades
  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  data: Date;

  @Prop({ type: String, ref: 'Nutricionista', required: true })
  nutricionistaId: string;
}

// Criação do Schema
export const OrientacaoSchema = SchemaFactory.createForClass(Orientacao);
