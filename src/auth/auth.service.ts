import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const usuario = await this.usuarioService.findByEmail(dto.email);

    if (!usuario) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    if (usuario.senha !== dto.senha) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const payload = {
      sub: usuario._id,
      email: usuario.email,
      tipoUsuario: usuario.tipoUsuario,
    };

    return {
      access_token: this.jwtService.sign(payload),
      usuario: {
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email,
        tipoUsuario: usuario.tipoUsuario,
      },
    };
  }
}
