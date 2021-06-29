import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetVersionService } from './set-version.service';
import { SetController } from './set.controller';
import { SetEntity, SetVersionEntity } from './set.entity';
import { SetService } from './set.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SetEntity]),
    TypeOrmModule.forFeature([SetVersionEntity]),
  ],
  controllers: [SetController],
  providers: [SetService, SetVersionService],
})
export class SetModule {}
