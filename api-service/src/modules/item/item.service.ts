import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, FindConditions, Repository } from 'typeorm';
import { BaseService } from '../base.service';
import { ItemEntity, ItemFitting } from './item.entity';

@Injectable()
export class ItemService extends BaseService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemRepo: Repository<ItemEntity>,
    @InjectRepository(ItemFitting)
    private itemFittingRepo: Repository<ItemFitting>,
    private conn: Connection,
  ) {
    super();
  }

  /**
   * 获取列表
   * @returns 装备列表
   */
  async findAll(setID?: string): Promise<ItemEntity[]> {
    const { setId } = await this.$getLatestSetAndVersion(this.conn);
    const where: FindConditions<ItemEntity> = { isDeleted: 0 };
    if (setId && setId.length > 0) {
      where.setId = setId;
    } else {
      where.setId = setID;
    }
    const itemList = await this.itemRepo.find(where);
    for (let i = 0; i < itemList.length; i++) {
      const item = itemList[i];
      const fittingList = await this.itemFittingRepo.find({
        itemId: item.id,
      });
      if (fittingList && fittingList.length > 0) {
        itemList[i].itemFittingIds = fittingList.map((_) => _.itemFittingId);
      }
    }
    return itemList;
  }

  /**
   * 获取装备
   * @returns 装备列表
   */
  async findOne(id: string): Promise<ItemEntity> {
    const item = await this.itemRepo.findOne(id);
    const fittingList = await this.itemFittingRepo.find({
      itemId: item.id,
    });
    if (fittingList && fittingList.length > 0) {
      item.itemFittingIds = fittingList.map((_) => _.itemFittingId);
    }
    return item;
  }

  /**
   * 新增
   * @returns 新增装备
   */
  async add(entity: ItemEntity) {
    await this.conn
      .createQueryBuilder<ItemEntity>(ItemEntity, 'item')
      .insert()
      .into(ItemEntity)
      .values([entity])
      .execute();
  }

  /**
   * 更新
   * @returns 更新装备
   */
  async update(entity: ItemEntity) {
    return await this.conn
      .createQueryBuilder<ItemEntity>(ItemEntity, 'item')
      .update(entity)
      .set({
        updateAt: this.$getNowDateTime(),
        name: entity.name,
        nameCn: entity.nameCn,
        img: entity.img,
        desc: entity.desc,
        attackDamage: entity.attackDamage,
        attackSpeed: entity.attackSpeed,
        armor: entity.armor,
        magicalResistance: entity.magicalResistance,
        spellPower: entity.spellPower,
        mana: entity.mana,
        health: entity.health,
        criticalStrikeChance: entity.criticalStrikeChance,
        dodgeChance: entity.dodgeChance,
      })
      .where('id = :id', { id: entity.id })
      .execute();
  }
}
