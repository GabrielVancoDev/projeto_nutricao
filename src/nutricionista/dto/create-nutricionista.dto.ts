import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateNutricionistaDto {
  @IsString()
  @IsNotEmpty()
  crn: string;

  @IsString()
  @IsNotEmpty()
  especialidade: string;

  @IsMongoId()
  @IsNotEmpty()
  usuarioId: string;
}
