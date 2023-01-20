import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NodeEnv } from '../types/node-env.type';
import { validateConf } from './validate-conf.config';

const nodeEnv: NodeEnv = process.env.NODE_ENV
  ? (process.env.NODE_ENV as NodeEnv)
  : 'dev';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateConf,
      envFilePath: `.${nodeEnv}.env`,
    }),
  ],
})
export class ConfModule {}
