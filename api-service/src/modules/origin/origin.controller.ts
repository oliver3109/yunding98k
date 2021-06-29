import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { OriginService } from './origin.service';
import { OriginEntity } from './origin.entity';
import { BaseController } from '../base.controller';

@ApiTags('种族')
@Controller('/origin')
export class OriginController extends BaseController {
  constructor(private readonly originService: OriginService) {
    super();
  }

  @ApiOperation({ summary: '查询种族列表' })
  @ApiCreatedResponse({
    description: '种族列表',
    type: [OriginEntity],
  })
  @ApiQuery({ name: 'setId', type: String, description: '赛季UUID' })
  @HttpCode(200)
  @Get('/list')
  async getOriginList(@Query('setId') setId) {
    try {
      const list = await this.originService.findAll(setId);
      return this.returnSuccess('查询种族成功', list);
    } catch (error) {
      return this.returnFail('查询种族失败');
    }
  }

  @ApiOperation({ summary: '查询种族详情' })
  @ApiQuery({ name: 'id', type: String, description: '种族UUID' })
  @HttpCode(200)
  @Get('/detail')
  async getChampionDetail(@Query('id') id) {
    try {
      const championDetail = await this.originService.findOne(id);
      return this.returnSuccess('查询种族详情成功', championDetail);
    } catch (error) {
      return this.returnFail('查询种族详情失败');
    }
  }

  @ApiOperation({ summary: '新增种族' })
  @ApiBody({ type: OriginEntity, description: '种族dto' })
  @HttpCode(200)
  @Post('/add')
  addChampion(@Body() data) {
    try {
      this.originService.add(data);
      return this.returnSuccess('新增种族成功');
    } catch (error) {
      return this.returnFail('新增种族失败');
    }
  }

  @ApiOperation({ summary: '更新种族' })
  @ApiBody({ type: OriginEntity, description: '种族dto' })
  @HttpCode(200)
  @Post('/update')
  updateChampion(@Body() data) {
    try {
      this.originService.update(data);
      return this.returnSuccess('更新种族成功');
    } catch (error) {
      return this.returnFail('更新种族失败');
    }
  }
}
