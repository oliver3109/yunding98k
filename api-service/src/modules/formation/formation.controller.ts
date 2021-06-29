import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { BaseController } from '../base.controller';
import { QueryFormationDto, SaveFormationDto } from './formation.dto';
import { FormationService } from './formation.service';

@ApiTags('阵容')
@Controller('/formation')
export class FormationController extends BaseController {
  constructor(private readonly formationService: FormationService) {
    super();
  }

  @ApiOperation({ summary: '查询所有阵容' })
  @ApiCreatedResponse({
    description: '阵容列表',
    type: [QueryFormationDto],
  })
  @HttpCode(200)
  @Get('/list')
  async getFormationList() {
    try {
      const list = await this.formationService.findAll();
      return this.returnSuccess('查询阵容成功', list);
    } catch (error) {
      console.log(error);
      return this.returnFail('查询阵容失败');
    }
  }

  @ApiOperation({ summary: '查询阵容详情' })
  @ApiQuery({ name: 'id', type: String, description: '阵容UUID' })
  @HttpCode(200)
  @Get('/detail')
  async getFormationDetail(@Query('id') id) {
    try {
      const formationDetail = await this.formationService.findOne(id);
      return this.returnSuccess('查询阵容详情成功', formationDetail);
    } catch (error) {
      return this.returnFail('查询阵容详情失败');
    }
  }

  @ApiOperation({ summary: '新增阵容' })
  @ApiBody({ type: SaveFormationDto, description: '阵容dto' })
  @HttpCode(200)
  @Post('/add')
  addFormation(@Body() data) {
    try {
      this.formationService.add(data);
      return this.returnSuccess('新增阵容成功');
    } catch (error) {
      return this.returnFail('新增阵容失败');
    }
  }

  @ApiOperation({ summary: '更新阵容' })
  @ApiBody({ type: SaveFormationDto, description: '阵容dto' })
  @HttpCode(200)
  @Post('/update')
  updateFormation(@Body() data) {
    try {
      this.formationService.update(data);
      return this.returnSuccess('更新阵容成功');
    } catch (error) {
      return this.returnFail('更新阵容失败');
    }
  }
}
