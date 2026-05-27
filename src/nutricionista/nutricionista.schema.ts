import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Nutricionista {
    @Prop({ required: true })
    crn: string;

    @Prop({ required: true})
    especialidade: string;

    @Prop({ type: String, ref: 'Usuario', required: true })
    usuarioId: string;
}

export const NutricionistaSchema = SchemaFactory.createForClass(Nutricionista);