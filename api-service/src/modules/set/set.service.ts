import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { BaseService } from '../base.service';
import { SetEntity } from './set.entity';

@Injectable()
export class SetService extends BaseService {
  constructor(
    @InjectRepository(SetEntity)
    private setRepo: Repository<SetEntity>,
    private conn: Connection,
  ) {
    super();
  }

  /**
   * 获取列表
   * @returns 赛季配置说明列表
   */
  async findAll(): Promise<SetEntity[]> {
    return this.setRepo.find({ isDeleted: 0 });
  }

  /**
   * 获取赛季
   * @returns 赛季配置说明列表
   */
  async findOne(id: string): Promise<SetEntity> {
    return this.setRepo.findOne(id);
  }

  /**
   * 新增
   * @returns 新增赛季配置说明
   */
  async add(entity: SetEntity) {
    await this.conn
      .createQueryBuilder<SetEntity>(SetEntity, 'set')
      .insert()
      .into(SetEntity)
      .values([entity])
      .execute();
  }

  /**
   * 更新
   * @returns 更新赛季配置说明
   */
  async update(entity: SetEntity) {
    return await this.conn
      .createQueryBuilder<SetEntity>(SetEntity, 'set')
      .update(entity)
      .set({
        updateAt: this.$getNowDateTime(),
        name: entity.name,
        detail: entity.detail,
      })
      .where('id = :id', { id: entity.id })
      .execute();
  }

  /**
   * 获取最新赛季和赛季版本
   */
  async getLatestSetAndSetVersion() {
    return await this.$getLatestSetAndVersion(this.conn);
  }
}
