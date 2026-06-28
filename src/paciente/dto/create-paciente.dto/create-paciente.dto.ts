import { IsNotEmpty, IsNumber, IsMongoId, Min } from 'class-validator';

export class CreatePacienteDto {
  // Validações
  @IsNumber()
  @Min(1) // Mínimo de 1
  @IsNotEmpty() // Campos obrigatórios
  peso: number;

  @IsNumber()
  @Min(0.5) // Mínimo de 0.5
  @IsNotEmpty() // Campos obrigatórios
  altura: number;

  @IsNumber()
  @Min(0) // Mínimo de 0
  idade: number;

  @IsMongoId()
  @IsNotEmpty() // Campos obrigatórios
  usuarioId: string;
}
