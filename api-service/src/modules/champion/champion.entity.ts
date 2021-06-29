import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base.entity';

/**
 * 英雄表
 */
@Entity({ name: 'champion' })
export class Champion extends BaseEntity {
  @ApiProperty({ description: '赛季ID' })
  @Column({ name: 'set_id', type: 'varchar', comment: '赛季ID(set)' })
  setId: string;

  @ApiProperty({ description: '英雄名称' })
  @Column({ name: 'name', type: 'varchar', comment: '英雄名称' })
  name: string;

  @ApiProperty({ description: '英雄名称(中文)' })
  @Column({ name: 'name_cn', type: 'varchar', comment: '英雄名称(中文)' })
  nameCn: string;

  @ApiProperty({ description: '英雄称号(中文)' })
  @Column({ name: 'title_cn', type: 'varchar', comment: '英雄称号(中文)' })
  titleCn: string;

  @ApiProperty({ description: '英雄头像' })
  @Column({ name: 'avatar', type: 'varchar', comment: '英雄头像' })
  avatar: string;

  @ApiProperty({ description: '英雄背景图' })
  @Column({ name: 'bg_img', type: 'varchar', comment: '英雄背景图' })
  bgImg: string;

  @ApiProperty({ description: '英雄费用' })
  @Column({ name: 'cost', type: 'varchar', comment: '英雄花费' })
  cost: number;

  @ApiProperty({ description: '英雄血量(逗号隔开)' })
  @Column({ name: 'health', type: 'varchar', comment: '英雄生命值(逗号隔开)' })
  health: string;

  @ApiProperty({ description: '英雄攻击力(逗号隔开)' })
  @Column({
    name: 'attack_damage',
    type: 'varchar',
    comment: '英雄攻击力(逗号隔开)',
  })
  attackDamage: string;

  @ApiProperty({ description: '英雄DPS(逗号隔开)' })
  @Column({ name: 'dps', type: 'varchar', comment: '英雄每秒伤害(逗号隔开)' })
  dps: string;

  @ApiProperty({ description: '英雄攻击范围(逗号隔开)' })
  @Column({
    name: 'attack_range',
    type: 'varchar',
    comment: '英雄攻击距离(逗号隔开)',
  })
  attackRange: string;

  @ApiProperty({ description: '英雄攻击速度(逗号隔开)' })
  @Column({
    name: 'attack_speed',
    type: 'varchar',
    comment: '英雄攻击速度(逗号隔开)',
  })
  attackSpeed: string;

  @ApiProperty({ description: '英雄护甲(逗号隔开)' })
  @Column({ name: 'armor', type: 'varchar', comment: '英雄护甲(逗号隔开)' })
  armor: string;

  @ApiProperty({ description: '英雄魔抗(逗号隔开)' })
  @Column({
    name: 'magical_resistance',
    type: 'varchar',
    comment: '英雄魔法抗性(逗号隔开)',
  })
  magicalResistance: string;

  @ApiProperty({ description: '技能图片' })
  @Column({ name: 'skill_img', type: 'varchar', comment: '英雄技能图片' })
  skillImg: string;

  @ApiProperty({ description: '技能名称' })
  @Column({ name: 'skill_name', type: 'varchar', comment: '英雄技能名称' })
  skillName: string;

  @ApiProperty({ description: '技能类型' })
  @Column({
    name: 'skill_type',
    type: 'varchar',
    comment: '英雄技能类型(被动|主动)',
  })
  skillType: '被动' | '主动';

  @ApiProperty({ description: '技能描述' })
  @Column({
    name: 'skill_desc',
    type: 'varchar',
    comment: '英雄技能描述',
    length: '1024',
  })
  skillDesc: string;

  @ApiProperty({ description: '技能附加参数' })
  @Column({
    name: 'skill_extra_data',
    type: 'json',
    comment: '英雄技能额外数据',
  })
  skillExtraData: string;
}

/**
 * 英雄的职业表
 */
@Entity({ name: 'champion_profession' })
export class ChampionProfession extends BaseEntity {
  @ApiProperty({ description: '英雄UUID' })
  @Column({ name: 'champion_id', type: 'varchar' })
  championId: string;

  @ApiProperty({ description: '职业UUID' })
  @Column({ name: 'profession_id', type: 'varchar' })
  professionId: string;
}

/**
 * 英雄的种族表
 */
@Entity({ name: 'champion_origin' })
export class ChampionOrigin extends BaseEntity {
  @ApiProperty({ description: '英雄UUID' })
  @Column({ name: 'champion_id', type: 'varchar' })
  championId: string;

  @ApiProperty({ description: '种族UUID' })
  @Column({ name: 'origin_id', type: 'varchar' })
  originId: string;
}

/**
 * 英雄的推荐装趋势表
 */
@Entity({ name: 'champion_recommend_item' })
export class ChampionRecommendItem extends BaseEntity {
  @ApiProperty({ description: '英雄UUID' })
  @Column({ name: 'champion_id', type: 'varchar' })
  championId: string;

  @ApiProperty({ description: '装备UUID' })
  @Column({ name: 'item_id', type: 'varchar' })
  itemId: string;

  @ApiProperty({ description: '趋势(单位:%)' })
  @Column({ name: 'trend', type: 'varchar' })
  trend: string;
}
