import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import * as moment from 'moment';
import { ApiProperty } from '@nestjs/swagger';

const defaultDate = () => moment().format('YYYY-MM-DD HH:mm:ss');

export class BaseEntity {
  @ApiProperty({ description: 'uuid' })
  @PrimaryColumn({ name: 'id' })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty({ description: '创建时间' })
  @Column({
    type: 'datetime',
    name: 'create_at',
    comment: '创建时间',
    default: defaultDate(),
  })
  public createAt: string;

  @ApiProperty({ description: '修改时间' })
  @Column({
    type: 'datetime',
    name: 'update_at',
    comment: '修改时间',
    default: defaultDate(),
  })
  public updateAt: string;

  @ApiProperty({ description: '是否删除(0:否/1:是)' })
  @Column({
    type: 'tinyint',
    name: 'is_deleted',
    comment: '是否删除(0:否/1:是)',
    default: 0,
  })
  public isDeleted: 0 | 1;
}
