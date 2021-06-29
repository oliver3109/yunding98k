import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessionController } from './profession.controller';
import { ProfessionEntity } from './profession.entity';
import { ProfessionService } from './profession.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfessionEntity])],
  controllers: [ProfessionController],
  providers: [ProfessionService],
})
export class ProfessionModule {}
