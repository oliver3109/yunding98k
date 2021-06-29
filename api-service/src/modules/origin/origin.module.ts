import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OriginController } from './origin.controller';
import { OriginEntity } from './origin.entity';
import { OriginService } from './origin.service';

@Module({
  imports: [TypeOrmModule.forFeature([OriginEntity])],
  controllers: [OriginController],
  providers: [OriginService],
})
export class OriginModule {}
