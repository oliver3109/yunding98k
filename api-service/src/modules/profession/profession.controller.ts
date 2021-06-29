import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ProfessionService } from './profession.service';
import { ProfessionEntity } from './profession.entity';
import { BaseController } from '../base.controller';

@ApiTags('职业')
@Controller('/profession')
export class ProfessionController extends BaseController {
  constructor(private readonly professionService: ProfessionService) {
    super();
  }

  @ApiOperation({ summary: '查询职业列表' })
  @ApiCreatedResponse({
    description: '职业列表',
    type: [ProfessionEntity],
  })
  @ApiQuery({ name: 'setId', type: String, description: '赛季UUID' })
  @HttpCode(200)
  @Get('/list')
  async getProfessionList(@Query('setId') setId) {
    try {
      const list = await this.professionService.findAll(setId);
      return this.returnSuccess('查询职业成功', list);
    } catch (error) {
      return this.returnFail('查询职业失败');
    }
  }

  @ApiOperation({ summary: '查询职业详情' })
  @ApiQuery({ name: 'id', type: String, description: '职业UUID' })
  @HttpCode(200)
  @Get('/detail')
  async getChampionDetail(@Query('id') id) {
    try {
      const championDetail = await this.professionService.findOne(id);
      return this.returnSuccess('查询职业详情成功', championDetail);
    } catch (error) {
      return this.returnFail('查询职业详情失败');
    }
  }

  @ApiOperation({ summary: '新增职业' })
  @ApiBody({ type: ProfessionEntity, description: '职业dto' })
  @HttpCode(200)
  @Post('/add')
  addChampion(@Body() data) {
    try {
      this.professionService.add(data);
      return this.returnSuccess('新增职业成功');
    } catch (error) {
      return this.returnFail('新增职业失败');
    }
  }

  @ApiOperation({ summary: '更新职业' })
  @ApiBody({ type: ProfessionEntity, description: '职业dto' })
  @HttpCode(200)
  @Post('/update')
  updateChampion(@Body() data) {
    try {
      this.professionService.update(data);
      return this.returnSuccess('更新职业成功');
    } catch (error) {
      return this.returnFail('更新职业失败');
    }
  }
}
