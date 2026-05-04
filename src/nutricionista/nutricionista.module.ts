import { Module } from '@nestjs/common';
import { NutricionistaService } from './nutricionista.service';
import { NutricionistaController } from './nutricionista.controller';

@Module({
  providers: [NutricionistaService],
  controllers: [NutricionistaController]
})
export class NutricionistaModule {}
