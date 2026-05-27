import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'; // Importações do class-validator

// Dto para criar um novo usuário

export class CreateUsuarioDto {

// Validação dos campos
  @IsNotEmpty() // Campos obrigatórios
  nome: string;

  @IsEmail()  // Validação de email
  email: string;

  @MinLength(3) // Mínimo de 3 caracteres
  senha: string;

  @IsNotEmpty()  // Campos obrigatórios
  tipoUsuario: string;

}
