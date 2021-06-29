import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base.entity';

/**
 * 种族
 */
@Entity({ name: 'origin' })
export class OriginEntity extends BaseEntity {
  @Column({ name: 'set_id', type: 'varchar', comment: '赛季UUID' })
  setId: string;

  @Column({ name: 'name', type: 'varchar', comment: '种族名称' })
  name: string;

  @Column({ name: 'name_cn', type: 'varchar', comment: '种族名称(中文名)' })
  nameCn: string;

  @Column({ name: 'img', type: 'varchar', comment: '种族图片' })
  img: string;

  @Column({ name: 'desc', type: 'varchar', length: 512, comment: '种族描述' })
  desc: string;

  @Column({
    name: 'extra_data',
    type: 'json',
    comment: '种族额外数据',
    nullable: true,
  })
  extraData: string;
}
