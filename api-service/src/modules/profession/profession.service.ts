import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, FindConditions, Repository } from 'typeorm';
import { BaseService } from '../base.service';
import { ProfessionEntity } from './profession.entity';

@Injectable()
export class ProfessionService extends BaseService {
  constructor(
    @InjectRepository(ProfessionEntity)
    private professionRepo: Repository<ProfessionEntity>,
    private conn: Connection,
  ) {
    super();
  }

  /**
   * 获取列表
   * @returns 职业列表
   */
  async findAll(setID?: string): Promise<ProfessionEntity[]> {
    const { setId } = await this.$getLatestSetAndVersion(this.conn);
    const where: FindConditions<ProfessionEntity> = { isDeleted: 0 };
    if (setId && setId.length > 0) {
      where.setId = setId;
    } else {
      where.setId = setID;
    }
    return this.professionRepo.find(where);
  }

  /**
   * 获取职业
   * @returns 职业列表
   */
  async findOne(id: string): Promise<ProfessionEntity> {
    return this.professionRepo.findOne(id);
  }

  /**
   * 新增
   * @returns 新增职业
   */
  async add(entity: ProfessionEntity) {
    await this.conn
      .createQueryBuilder<ProfessionEntity>(ProfessionEntity, 'profession')
      .insert()
      .into(ProfessionEntity)
      .values([entity])
      .execute();
  }

  /**
   * 更新
   * @returns 更新职业
   */
  async update(entity: ProfessionEntity) {
    return await this.conn
      .createQueryBuilder<ProfessionEntity>(ProfessionEntity, 'profession')
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
