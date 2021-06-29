import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { BaseController } from '../base.controller';
import { ItemService } from './item.service';
import { ItemEntity } from './item.entity';

@ApiTags('装备')
@Controller('/item')
export class ItemController extends BaseController {
  constructor(private readonly itemService: ItemService) {
    super();
  }

  @ApiOperation({ summary: '查询装备列表' })
  @ApiCreatedResponse({
    description: '装备列表',
    type: [ItemEntity],
  })
  @ApiQuery({ name: 'setId', type: String, description: '赛季UUID' })
  @HttpCode(200)
  @Get('/list')
  async getItemList(@Query('setId') setId) {
    try {
      const list = await this.itemService.findAll(setId);
      return this.returnSuccess('查询装备成功', list);
    } catch (error) {
      return this.returnFail('查询装备失败');
    }
  }

  @ApiOperation({ summary: '查询装备详情' })
  @ApiQuery({ name: 'id', type: String, description: '装备UUID' })
  @HttpCode(200)
  @Get('/detail')
  async getItemDetail(@Query('id') id) {
    try {
      const itemDetail = await this.itemService.findOne(id);
      return this.returnSuccess('查询装备详情成功', itemDetail);
    } catch (error) {
      return this.returnFail('查询装备详情失败');
    }
  }

  @ApiOperation({ summary: '新增装备' })
  @ApiBody({ type: ItemEntity, description: '装备dto' })
  @HttpCode(200)
  @Post('/add')
  addItem(@Body() data) {
    try {
      this.itemService.add(data);
      return this.returnSuccess('新增装备成功');
    } catch (error) {
      return this.returnFail('新增装备失败');
    }
  }

  @ApiOperation({ summary: '更新装备' })
  @ApiBody({ type: ItemEntity, description: '装备dto' })
  @HttpCode(200)
  @Post('/update')
  updateItem(@Body() data) {
    try {
      this.itemService.update(data);
      return this.returnSuccess('更新装备成功');
    } catch (error) {
      return this.returnFail('更新装备失败');
    }
  }
}
