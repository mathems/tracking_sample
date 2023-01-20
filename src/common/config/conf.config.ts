import { Transform } from 'class-transformer';
import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { NodeEnv, NODE_ENVS } from '../types/node-env.type';

export class Conf {
  @IsIn(NODE_ENVS)
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  NODE_ENV: NodeEnv = 'dev';

  @Transform(({ value }) => +value)
  @IsNumber()
  MONGO_PORT = 27017;

  @IsString()
  @IsNotEmpty()
  MONGO_USER: string;

  @IsString()
  @IsNotEmpty()
  MONGO_PASS: string;

  @IsString()
  @IsNotEmpty()
  MONGO_DB: string;

  @Transform(({ value }) => +value)
  @IsNumber()
  APP_PORT: number;
}
