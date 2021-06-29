import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { SetService } from './set.service';
import { SetEntity, SetVersionEntity } from './set.entity';
import { BaseController } from '../base.controller';
import { SetVersionService } from './set-version.service';

@ApiTags('赛季')
@Controller('/set')
export class SetController extends BaseController {
  constructor(
    private readonly setService: SetService,
    private readonly setVersionService: SetVersionService,
  ) {
    super();
  }

  /* --------------------------- 赛季表（主表） ---------------------------------  */

  @ApiOperation({ summary: '查询赛季列表' })
  @ApiCreatedResponse({
    description: '赛季列表',
    type: [SetEntity],
  })
  @HttpCode(200)
  @Get('/list')
  async getSetList() {
    try {
      const list = await this.setService.findAll();
      return this.returnSuccess('查询赛季成功', list);
    } catch (error) {
      return this.returnFail('查询赛季失败');
    }
  }

  @ApiOperation({ summary: '查询赛季详情' })
  @ApiQuery({ name: 'id', type: String, description: '赛季UUID' })
  @HttpCode(200)
  @Get('/detail')
  async getSetDetail(@Query('id') id) {
    try {
      const setDetail = await this.setService.findOne(id);
      return this.returnSuccess('查询赛季详情成功', setDetail);
    } catch (error) {
      return this.returnFail('查询赛季详情失败');
    }
  }

  @ApiOperation({ summary: '新增赛季' })
  @ApiBody({ type: SetEntity, description: '赛季' })
  @HttpCode(200)
  @Post('/add')
  addSet(@Body() data) {
    try {
      this.setService.add(data);
      return this.returnSuccess('新增赛季成功');
    } catch (error) {
      return this.returnFail('新增赛季失败');
    }
  }

  @ApiOperation({ summary: '更新赛季' })
  @ApiBody({ type: SetEntity, description: '赛季' })
  @HttpCode(200)
  @Post('/update')
  updateSet(@Body() data) {
    try {
      this.setService.update(data);
      return this.returnSuccess('更新赛季成功');
    } catch (error) {
      return this.returnFail('更新赛季失败');
    }
  }

  /* --------------------------- 赛季版本（子表） ---------------------------------  */

  @ApiOperation({ summary: '查询' })
  @ApiCreatedResponse({
    description: '赛季版本列表',
    type: [SetVersionEntity],
  })
  @HttpCode(200)
  @Get('/version/list')
  async getSetVersionList(@Query('setId') setId) {
    try {
      console.log(setId);
      const list = await this.setVersionService.findAll(setId);
      return this.returnSuccess('查询赛季版本成功', list);
    } catch (error) {
      return this.returnFail('查询赛季版本失败');
    }
  }

  @ApiOperation({ summary: '查询赛季版本详情' })
  @ApiQuery({ name: 'id', type: String, description: '赛季版本UUID' })
  @HttpCode(200)
  @Get('/version/detail')
  async getSetVersionDetail(@Query('id') id) {
    try {
      const setVErsionDetail = await this.setVersionService.findOne(id);
      return this.returnSuccess('查询赛季版本详情成功', setVErsionDetail);
    } catch (error) {
      return this.returnFail('查询赛季版本详情失败');
    }
  }

  @ApiOperation({ summary: '新增赛季版本' })
  @ApiBody({ type: SetEntity, description: '赛季版本dto' })
  @HttpCode(200)
  @Post('/version/add')
  addSetVersion(@Body() data) {
    try {
      console.log(data);
      this.setVersionService.add(data);
      return this.returnSuccess('新增赛季版本成功');
    } catch (error) {
      return this.returnFail('新增赛季版本失败');
    }
  }

  @ApiOperation({ summary: '更新赛季版本' })
  @ApiBody({ type: SetEntity, description: '赛季版本' })
  @HttpCode(200)
  @Post('/version/update')
  updateSetVersion(@Body() data) {
    try {
      this.setVersionService.update(data);
      return this.returnSuccess('更新赛季版本成功');
    } catch (error) {
      return this.returnFail('更新赛季版本失败');
    }
  }

  @ApiOperation({ summary: '查询最新赛季和赛季版本' })
  @ApiCreatedResponse({
    description: '最新赛季和赛季版本',
  })
  @HttpCode(200)
  @Get('/latest')
  async getLatestSetAndSetVersion() {
    try {
      const detail = await this.setService.getLatestSetAndSetVersion();
      return this.returnSuccess('查询最新赛季和赛季版本成功', detail);
    } catch (error) {
      return this.returnFail('查询最新赛季和赛季版本失败');
    }
  }
}
