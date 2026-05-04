import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { PacienteModule } from './paciente/paciente.module';
import { NutricionistaModule } from './nutricionista/nutricionista.module';
import { AlimentacaoModule } from './alimentacao/alimentacao.module';
import { OrientacaoModule } from './orientacao/orientacao.module';

@Module({
  imports: [UsuarioModule, PacienteModule, NutricionistaModule, AlimentacaoModule, OrientacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
