import { ApiProperty } from '@nestjs/swagger';
import { Champion } from './champion.entity';
import { ProfessionEntity } from '../profession/profession.entity';
import { OriginEntity } from '../origin/origin.entity';
import { ItemEntity } from '../item/item.entity';

/**
 * 新增或修改
 */
export class SaveChampionDto extends Champion {
  @ApiProperty({ example: '英雄职业ID集合' })
  professionIds: string[] = [];

  @ApiProperty({ example: '英雄种族ID集合' })
  originIds: string[] = [];

  @ApiProperty({ example: '英雄推荐装备ID集合' })
  recommendItemIds: string[] = [];
}

/**
 * 英雄详情
 */
export class ChampionDetailDto extends Champion {
  @ApiProperty({ example: '英雄职业集合' })
  professionList: ProfessionEntity[] = [];

  @ApiProperty({ example: '英雄种族集合' })
  originList: OriginEntity[] = [];

  @ApiProperty({ example: '英雄推荐装备集合' })
  recommendItemList: any[] = [];
}

/**
 * 查询
 */
export class QueryChampionDto extends Champion {
  @ApiProperty({
    description: '英雄职业列表',
    type: ProfessionEntity,
    isArray: true,
  })
  professionList: ProfessionEntity[] = [];

  @ApiProperty({
    description: '英雄种族列表',
    type: OriginEntity,
    isArray: true,
  })
  originList: OriginEntity[] = [];
}
