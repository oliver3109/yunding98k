import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, FindConditions, Repository } from 'typeorm';
import { BaseService } from '../base.service';
import { OriginEntity } from './origin.entity';

@Injectable()
export class OriginService extends BaseService {
  constructor(
    @InjectRepository(OriginEntity)
    private originRepo: Repository<OriginEntity>,
    private conn: Connection,
  ) {
    super();
  }

  /**
   * 获取列表
   * @returns 职业列表
   */
  async findAll(setID?: string): Promise<OriginEntity[]> {
    const { setId } = await this.$getLatestSetAndVersion(this.conn);
    const where: FindConditions<OriginEntity> = { isDeleted: 0 };
    if (setId && setId.length > 0) {
      where.setId = setId;
    } else {
      where.setId = setID;
    }
    return this.originRepo.find(where);
  }

  /**
   * 获取职业
   * @returns 职业列表
   */
  async findOne(id: string): Promise<OriginEntity> {
    return this.originRepo.findOne(id);
  }

  /**
   * 新增
   * @returns 新增职业
   */
  async add(entity: OriginEntity) {
    await this.conn
      .createQueryBuilder<OriginEntity>(OriginEntity, 'origin')
      .insert()
      .into(OriginEntity)
      .values([entity])
      .execute();
  }

  /**
   * 更新
   * @returns 更新职业
   */
  async update(entity: OriginEntity) {
    return await this.conn
      .createQueryBuilder<OriginEntity>(OriginEntity, 'origin')
      .update(entity)
      .set({
        updateAt: this.$getNowDateTime(),
        name: entity.name,
        img: entity.img,
        desc: entity.desc,
        extraData: entity.extraData,
      })
      .where('id = :id', { id: entity.id })
      .execute();
  }
}
