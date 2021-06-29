import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base.entity';

/**
 * 装备表
 */
@Entity({ name: 'item' })
export class ItemEntity extends BaseEntity {
  @Column({ name: 'set_id', type: 'varchar', comment: '赛季ID(set)' })
  setId: string;

  @Column({ name: 'name', type: 'varchar', comment: '装备名称' })
  name: string;

  @Column({ name: 'name_cn', type: 'varchar', comment: '装备名称(中文)' })
  nameCn: string;

  @Column({ name: 'img', type: 'varchar', comment: '装备图片' })
  img: string;

  @Column({ name: 'level', type: 'char', comment: '装备品级' })
  level: 'S' | 'A' | 'B' | 'C' | null;

  @Column({ name: 'desc', type: 'varchar', comment: '装备描述' })
  desc: string;

  @Column({ name: 'attack_damage', type: 'varchar', comment: '装备攻击力加成' })
  attackDamage: string;

  @Column({
    name: 'attack_speed',
    type: 'varchar',
    comment: '装备攻击速度加成(单位:%)',
  })
  attackSpeed: string;

  @Column({ name: 'armor', type: 'varchar', comment: '装备护甲加成' })
  armor: string;

  @Column({
    name: 'magical_resistance',
    type: 'varchar',
    comment: '装备魔法抗性加成',
  })
  magicalResistance: string;

  @Column({
    name: 'spell_power',
    type: 'varchar',
    comment: '装备法术强度加成',
  })
  spellPower: string;

  @Column({
    name: 'mana',
    type: 'varchar',
    comment: '装备法力值加成',
  })
  mana: string;

  @Column({
    name: 'health',
    type: 'varchar',
    comment: '装备生命值加成',
  })
  health: string;

  @Column({
    name: 'critical_strike_chance',
    type: 'varchar',
    comment: '装备暴击率加成',
  })
  criticalStrikeChance: string;

  @Column({
    name: 'dodge_chance',
    type: 'varchar',
    comment: '装备闪避率加成',
  })
  dodgeChance: string;

  // 装备配件ID
  itemFittingIds?: string[];
}

/**
 * 装备配件表
 */
@Entity({ name: 'item_fitting' })
export class ItemFitting extends BaseEntity {
  @Column({ name: 'item_id', type: 'varchar', comment: '装备ID' })
  itemId: string;

  @Column({ name: 'item_fitting_id', type: 'varchar', comment: '配件装备ID' })
  itemFittingId: string;
}
