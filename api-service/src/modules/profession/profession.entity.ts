import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base.entity';

/**
 * 职业
 */
@Entity({ name: 'profession' })
export class ProfessionEntity extends BaseEntity {
  @ApiProperty({ description: '赛季UUID' })
  @Column({ name: 'set_id', type: 'varchar', comment: '赛季UUID' })
  setId: string;

  @ApiProperty({ description: '职业名称' })
  @Column({ name: 'name', type: 'varchar', comment: '职业名称' })
  name: string;

  @ApiProperty({ description: '职业名称' })
  @Column({ name: 'name_cn', type: 'varchar', comment: '职业名称(中文名)' })
  nameCn: string;

  @ApiProperty({ description: '职业图片' })
  @Column({ name: 'img', type: 'varchar', comment: '职业图片', nullable: true })
  img: string;

  @ApiProperty({ description: '职业描述' })
  @Column({
    name: 'desc',
    type: 'varchar',
    comment: '职业描述',
    nullable: true,
    length: 512,
  })
  desc: string;

  @ApiProperty({ description: '职业额外数据' })
  @Column({
    name: 'extra_data',
    type: 'json',
    comment: '职业额外数据',
    nullable: true,
  })
  extraData: string;
}
