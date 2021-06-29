import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { BaseController } from '../base.controller';
import { QueryChampionDto, SaveChampionDto } from './champion.dto';
import { ChampionService } from './champion.service';

@ApiTags('英雄')
@Controller('/champion')
export class ChampionController extends BaseController {
  constructor(private readonly championService: ChampionService) {
    super();
  }

  @ApiOperation({ summary: '查询所有英雄' })
  @ApiCreatedResponse({
    description: '英雄列表',
    type: [QueryChampionDto],
  })
  @HttpCode(200)
  @Get('/list')
  async getChampionList(
    @Query('originId') originId,
    @Query('professionId') professionId,
    @Query('cost') cost,
    @Query('name') name,
  ) {
    try {
      const list = await this.championService.findAll(
        originId,
        professionId,
        cost,
        name,
      );
      return this.returnSuccess('查询英雄成功', list);
    } catch (error) {
      return this.returnFail('查询英雄失败');
    }
  }

  @ApiOperation({ summary: '查询英雄详情' })
  @ApiQuery({ name: 'id', type: String, description: '英雄UUID' })
  @HttpCode(200)
  @Get('/detail')
  async getChampionDetail(@Query('id') id) {
    try {
      const championDetail = await this.championService.findOne(id);
      return this.returnSuccess('查询英雄详情成功', championDetail);
    } catch (error) {
      return this.returnFail('查询英雄详情失败');
    }
  }

  @ApiOperation({ summary: '新增英雄' })
  @ApiBody({ type: SaveChampionDto, description: '英雄dto' })
  @HttpCode(200)
  @Post('/add')
  addChampion(@Body() data) {
    try {
      this.championService.add(data);
      return this.returnSuccess('新增英雄成功');
    } catch (error) {
      return this.returnFail('新增英雄失败');
    }
  }

  @ApiOperation({ summary: '更新英雄' })
  @ApiBody({ type: SaveChampionDto, description: '英雄dto' })
  @HttpCode(200)
  @Post('/update')
  updateChampion(@Body() data) {
    try {
      this.championService.update(data);
      return this.returnSuccess('更新英雄成功');
    } catch (error) {
      return this.returnFail('更新英雄失败');
    }
  }
}
