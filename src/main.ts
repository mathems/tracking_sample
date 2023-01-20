import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Conf } from './common/config/conf.config';

async function bootstrap() {
  const logger = new Logger('main.ts::bootstrap()');
  const app = await NestFactory.create(AppModule);
  const conf = app.get<ConfigService<Conf>>(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        exposeDefaultValues: true,
        enableImplicitConversion: false,
      },
    }),
  );

  await app.listen(conf.get('APP_PORT'));

  logger.debug(`App is listened on ${await app.getUrl()}`);
}
bootstrap();
