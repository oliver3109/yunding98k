import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base.entity';

/**
 * 编队表
 */
@Entity({ name: 'formation' })
export class FormationEntity extends BaseEntity {
  @ApiProperty({ description: '赛季ID' })
  @Column({ name: 'set_id', type: 'varchar', comment: '赛季ID(set)' })
  setId: string;

  @ApiProperty({ description: '赛季版本ID' })
  @Column({
    name: 'set_version_id',
    type: 'varchar',
    comment: '赛季版本ID(set)',
  })
  setVersionId: string;

  @ApiProperty({ description: '阵容名称' })
  @Column({ name: 'name', type: 'varchar', comment: '阵容名称' })
  name: string;

  @ApiProperty({ description: '阵容名称(中文)' })
  @Column({ name: 'name_cn', type: 'varchar', comment: '阵容名称(中文)' })
  nameCn: string;

  @ApiProperty({ description: '阵容分级', nullable: true })
  @Column({ name: 'tier', type: 'varchar', comment: '阵容分级' })
  tier: string;

  @ApiProperty({ description: '基本信息' })
  @Column({ name: 'basic_info', type: 'varchar', comment: '基本信息' })
  basicInfo: string;

  @ApiProperty({ description: '何时开始' })
  @Column({ name: 'when_to_make', type: 'varchar', comment: '何时开始' })
  whenToMake: string;

  @ApiProperty({ description: '核心英雄' })
  @Column({ name: 'core_champions', type: 'text', comment: '核心英雄' })
  coreChampions: string;

  @ApiProperty({ description: '英雄配置' })
  @Column({ name: 'champion_options', type: 'text', comment: '英雄配置' })
  championOptions: string;

  @ApiProperty({ description: '轮播优先级' })
  @Column({ name: 'carousel_priority', type: 'text', comment: '轮播优先级' })
  carouselPriority: string;

  @ApiProperty({ description: '编队' })
  @Column({ name: 'formation', type: 'text', comment: '编队' })
  formation: string;

  @ApiProperty({ description: '升级指南' })
  @Column({ name: 'leveling_guide', type: 'text', comment: '升级指南' })
  levelingGuide: string;

  @ApiProperty({ description: '游戏计划' })
  @Column({ name: 'game_plan', type: 'text', comment: '游戏计划' })
  gamePlan: string;

  @ApiProperty({ description: '附加提示' })
  @Column({ name: 'comp_tips', type: 'text', comment: '附加提示' })
  compTips: string;

  @ApiProperty({ description: '点赞数' })
  @Column({ name: 'like_count', type: 'int', comment: '点赞数' })
  likeCount: number;

  // 赛季玩法
  @ApiProperty({ description: '赛季特殊玩法' })
  @Column({
    name: 'set_special_rules',
    type: 'varchar',
    comment: '赛季特殊玩法',
    nullable: true,
  })
  setSpecialRules: string;
}
