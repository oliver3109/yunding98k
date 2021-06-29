import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemController } from './item.controller';
import { ItemEntity, ItemFitting } from './item.entity';
import { ItemService } from './item.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemEntity]),
    TypeOrmModule.forFeature([ItemFitting]),
  ],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
