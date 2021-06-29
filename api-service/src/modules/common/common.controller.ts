import {
  Controller,
  Get,
  HttpCode,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../base.controller';
import { CommonService } from './common.service';

@ApiTags('公共')
@Controller('/common')
export class CommonController extends BaseController {
  constructor(private readonly commonService: CommonService) {
    super();
  }

  @ApiOperation({ summary: '上传文件' })
  @HttpCode(200)
  @Post('/upload/file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }
}
