import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { BaseService } from '../base.service';
import { ItemEntity, ItemFitting } from '../item/item.entity';
import { OriginEntity } from '../origin/origin.entity';
import { ProfessionEntity } from '../profession/profession.entity';
import { ChampionDetailDto, SaveChampionDto } from './champion.dto';
import {
  Champion,
  ChampionOrigin,
  ChampionProfession,
  ChampionRecommendItem,
} from './champion.entity';

@Injectable()
export class ChampionService extends BaseService {
  constructor(
    @InjectRepository(Champion)
    private championRepo: Repository<Champion>,
    @InjectRepository(ChampionProfession)
    private championProfessionRepo: Repository<ChampionProfession>,
    @InjectRepository(ChampionOrigin)
    private championOriginRepo: Repository<ChampionOrigin>,
    @InjectRepository(OriginEntity)
    private originRepo: Repository<OriginEntity>,
    @InjectRepository(ProfessionEntity)
    private professionRepo: Repository<ProfessionEntity>,
    @InjectRepository(ChampionRecommendItem)
    private championRecommendItemRepo: Repository<ChampionRecommendItem>,
    @InjectRepository(ItemEntity)
    private itemEntityRepo: Repository<ItemEntity>,
    @InjectRepository(ItemFitting)
    private itemFittingRepo: Repository<ItemFitting>,
    private conn: Connection,
  ) {
    super();
  }

  /**
   * 获取列表
   * @returns 英雄列表
   */
  async findAll(
    originId: string,
    professionId: string,
    cost: string,
    name: string,
    setID?: string,
  ): Promise<Champion[]> {
    const { setId } = await this.$getLatestSetAndVersion(this.conn);
    const query = this.conn
      .createQueryBuilder<Champion>(Champion, 'champion')
      .select('champion');
    query.where('champion.isDeleted = :isDeleted', { isDeleted: 0 });
    // 赛季
    if (setID && setID.length > 0) {
      query.andWhere('champion.setId = :setId', { setId: setID });
    } else {
      query.andWhere('champion.setId = :setId', { setId: setId });
    }
    // 金钱
    if (cost) {
      query.andWhere('champion.cost = :cost', { cost: cost });
    }
    // 种族
    if (originId) {
      const championQuery = this.conn
        .createQueryBuilder<ChampionOrigin>(ChampionOrigin, 'co')
        .select('co.championId')
        .where('co.originId = :originId', {
          originId,
        });
      query.andWhere(`champion.id in (${championQuery.getQuery()})`);
      query.setParameters(championQuery.getParameters());
      console.log(championQuery.getSql());
    }
    // 职业
    if (professionId) {
      const championQuery = this.conn
        .createQueryBuilder<ChampionProfession>(ChampionProfession, 'cp')
        .select('cp.championId')
        .where('cp.professionId = :professionId', {
          professionId,
        });
      query.andWhere(`champion.id in (${championQuery.getQuery()})`);
      query.setParameters(championQuery.getParameters());
      console.log(championQuery.getSql());
    }
    // 名称/英文/称号
    if (name && name.length > 0) {
      query.andWhere(`champion.name like :param`).setParameters({
        param: '%' + name + '%',
      });
      query.andWhere(`champion.nameCn like :param`).setParameters({
        param: '%' + name + '%',
      });
      query.andWhere(`champion.titleCn like :param`).setParameters({
        param: '%' + name + '%',
      });
    }
    console.log(query.getSql());
    return await query.getMany();
  }

  /**
   * 获取英雄详情
   * @param uuid 英雄uuid
   * @returns 英雄详情
   */
  async findOne(uuid: string): Promise<ChampionDetailDto> {
    const champion = await this.championRepo.findOne({ id: uuid });

    // 英雄职业
    const professionIds = await this.championProfessionRepo.find({
      where: { championId: uuid },
      select: ['professionId'],
    });
    const professionList = await this.professionRepo.findByIds(
      professionIds.map((i) => i.professionId),
    );

    // 英雄种族
    const originIds = await this.championOriginRepo.find({
      where: { championId: uuid },
      select: ['originId'],
    });
    const originList = await this.originRepo.findByIds(
      originIds.map((i) => i.originId),
    );

    // 推荐装备
    const recommendItem = await this.championRecommendItemRepo.find({
      where: { championId: uuid },
    });

    const recommendItemList = [];
    for (const item of recommendItem) {
      let _data = {};
      // 查询推荐装备信息
      const itemEntity = await this.itemEntityRepo.findOne(item.itemId);
      // 查询推荐装备的配件列表
      const _itemFittingList = await this.itemFittingRepo.find({
        where: { itemId: item.itemId },
        select: ['itemFittingId'],
      });
      // 推荐装备的配件的装备ID列表
      const _itemFittingItemIds = _itemFittingList.map((i) => i.itemFittingId);
      // 查询推荐装备的配件装备信息列表
      const itemFittingList = [];
      for (const id of _itemFittingItemIds) {
        const _d = await this.itemEntityRepo.findOne(id);
        itemFittingList.push(_d);
      }
      itemEntity['itemFittingList'] = itemFittingList;

      _data = { ...itemEntity, trend: item.trend };
      recommendItemList.push(_data);
    }

    return {
      ...champion,
      professionList,
      originList,
      recommendItemList,
    };
  }

  /**
   * 新增英雄
   * @param ChampionDto 英雄
   */
  async add(championDto: SaveChampionDto) {
    // 创建事务
    const queryRunner = this.conn.createQueryRunner();
    // 连接
    await queryRunner.connect();
    // 开启事务
    await queryRunner.startTransaction();
    try {
      // 执行SQL ...
      console.log('执行SQL!!!');
      championDto.isDeleted = 0;
      championDto.createAt = this.$getNowDateTime();
      const champion = await queryRunner.manager.insert<Champion>(
        Champion,
        championDto,
      );
      // 事务提交
      console.log(champion);
      console.log('事务提交');
      await queryRunner.commitTransaction();
    } catch (err) {
      console.error(err);
      //如果遇到错误，可以回滚事务
      await queryRunner.rollbackTransaction();
    } finally {
      console.log('事务发布');
      //你需要手动实例化并部署一个queryRunner
      await queryRunner.release();
    }
  }

  /**
   * 更新英雄
   * @param ChampionDto 英雄
   */
  async update(championDto: SaveChampionDto) {
    await this.conn.transaction(async (manager) => {});
  }
}
