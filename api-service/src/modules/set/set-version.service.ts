import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { BaseService } from '../base.service';
import { SetVersionEntity } from './set.entity';

@Injectable()
export class SetVersionService extends BaseService {
  constructor(
    @InjectRepository(SetVersionEntity)
    private setVersionReop: Repository<SetVersionEntity>,
    private conn: Connection,
  ) {
    super();
  }

  /**
   * 查询赛季版本
   * @param setId 赛季UUID
   */
  async findAll(setId: string): Promise<SetVersionEntity[]> {
    return this.setVersionReop.find({ setId: setId, isDeleted: 0 });
  }

  /**
   * 查询赛季版本
   * @returns 赛季版本
   */
  async findOne(id: string): Promise<SetVersionEntity> {
    return this.setVersionReop.findOne(id);
  }

  /**
   * 新增赛季版本
   */
  async add(entity: SetVersionEntity) {
    await this.conn
      .createQueryBuilder<SetVersionEntity>(SetVersionEntity, 'setVersion')
      .insert()
      .into(SetVersionEntity)
      .values([entity])
      .execute();
  }

  /**
   * 更新赛季版本
   */
  async update(entity: SetVersionEntity) {
    return await this.conn
      .createQueryBuilder<SetVersionEntity>(SetVersionEntity, 'setVersion')
      .update(entity)
      .set({
        updateAt: this.$getNowDateTime(),
        version: entity.version,
        detail: entity.detail,
      })
      .where('id = :id', { id: entity.id })
      .execute();
  }
}
