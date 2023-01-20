import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateConf } from './validate-conf.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateConf,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
  ],
})
export class ConfModule {}
