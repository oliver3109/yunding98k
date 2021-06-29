import { Module } from '@nestjs/common';
import { CommonModule } from './modules/common/common.module';
import { ChampionModule } from './modules/champion/champion.module';
import { ItemModule } from './modules/item/item.module';
import { OriginModule } from './modules/origin/origin.module';
import { ProfessionModule } from './modules/profession/profession.module';
import { SetModule } from './modules/set/set.module';
import { FormationModule } from './modules/formation/formation.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CommonModule,
    ChampionModule,
    ItemModule,
    OriginModule,
    ProfessionModule,
    SetModule,
    FormationModule,
  ],
})
export class AppModule {}
