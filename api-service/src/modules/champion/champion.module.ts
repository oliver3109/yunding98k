import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChampionController } from './champion.controller';
import { ChampionService } from './champion.service';
import {
  Champion,
  ChampionOrigin,
  ChampionProfession,
  ChampionRecommendItem,
} from './champion.entity';
import { ProfessionEntity } from '../profession/profession.entity';
import { OriginEntity } from '../origin/origin.entity';
import { ItemEntity, ItemFitting } from '../item/item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Champion,
      ProfessionEntity,
      OriginEntity,
      ChampionProfession,
      ChampionOrigin,
      ChampionRecommendItem,
      ItemEntity,
      ItemFitting,
    ]),
  ],
  controllers: [ChampionController],
  providers: [ChampionService],
})
export class ChampionModule {}
