import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { PacienteModule } from './paciente/paciente.module';
import { NutricionistaModule } from './nutricionista/nutricionista.module';
import { AlimentacaoModule } from './alimentacao/alimentacao.module';
import { OrientacaoModule } from './orientacao/orientacao.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
@Module({
  imports: [
    UsuarioModule,
    PacienteModule,
    NutricionistaModule,
    AlimentacaoModule,
    OrientacaoModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nutricao'),
    AuthModule,
    
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
