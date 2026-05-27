import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Nutricionista, NutricionistaSchema } from './nutricionista.schema';
import { NutricionistaService } from './nutricionista.service';
import { NutricionistaController } from './nutricionista.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Nutricionista.name, schema: NutricionistaSchema },
    ]),
  ],
  providers: [NutricionistaService],
  controllers: [NutricionistaController]
})
export class NutricionistaModule {}
