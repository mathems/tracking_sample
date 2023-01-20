import { Transform } from 'class-transformer';
import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

const NODE_ENVS = ['dev', 'prod', 'test'] as const;
type NodeEnv = (typeof NODE_ENVS)[number];

export class Conf {
  @IsIn(NODE_ENVS)
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  NODE_ENV: NodeEnv = 'dev';

  @IsString()
  @IsNotEmpty()
  MONGO_URL: string;

  @Transform(({ value }) => +value)
  @IsNumber()
  MONGO_PORT: number;

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
