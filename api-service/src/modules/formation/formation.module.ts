import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormationController } from './formation.controller';
import { FormationService } from './formation.service';
import { ProfessionEntity } from '../profession/profession.entity';
import { OriginEntity } from '../origin/origin.entity';
import { ItemEntity, ItemFitting } from '../item/item.entity';
import { FormationEntity } from './formation.entity';
import {
  Champion,
  ChampionOrigin,
  ChampionProfession,
} from '../champion/champion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Champion,
      ProfessionEntity,
      OriginEntity,
      ChampionProfession,
      ChampionOrigin,
      ItemEntity,
      ItemFitting,
      FormationEntity,
    ]),
  ],
  controllers: [FormationController],
  providers: [FormationService],
})
export class FormationModule {}
