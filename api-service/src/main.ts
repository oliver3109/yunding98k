import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as rateLimit from 'express-rate-limit';
import { apiSafetyMiddleware } from './middleware/api-safety.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  // 处理跨域
  app.enableCors();

  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('我爱自走棋')
    .setDescription('我爱自走棋统一接口服务文档')
    .setVersion('1.0')
    .addTag('api接口')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  // 限流
  app.use(
    rateLimit({
      windowMs: 5 * 1 * 1000, // 5 秒
      max: 50, // 每个IP 5秒内 最多调用50次
    }),
  );

  // api安全
  app.use(apiSafetyMiddleware);

  await app.listen(38080);
}
bootstrap();
