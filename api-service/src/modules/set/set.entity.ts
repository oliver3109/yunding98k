import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base.entity';

/**
 * 赛季
 */
@Entity({ name: 'set' })
export class SetEntity extends BaseEntity {
  @Column({ name: 'name', type: 'varchar', comment: '赛季名称' })
  name: string;

  @Column({ name: 'detail', type: 'varchar', comment: '赛季介绍' })
  detail: string;
}

/**
 * 赛季版本
 */
@Entity({ name: 'set_version' })
export class SetVersionEntity extends BaseEntity {
  @Column({ name: 'set_id', type: 'varchar', comment: '赛季UUID' })
  setId: string;

  @Column({ name: 'version', type: 'varchar', comment: '版本号' })
  version: string;

  @Column({ name: 'detail', type: 'varchar', comment: '版本详情' })
  detail: string;
}
