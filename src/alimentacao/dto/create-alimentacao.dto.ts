import { IsNotEmpty, IsNumber, IsMongoId, Min } from 'class-validator';

export class CreateAlimentacaoDto {
  @IsNumber()
  @Min(1) // Mínimo de 1
  @IsNotEmpty() // Campos obrigatórios
  quantidade: number;
  @IsMongoId()
  @IsNotEmpty()
  pacienteId: string;
}
