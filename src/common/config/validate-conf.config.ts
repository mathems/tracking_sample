import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Conf } from './conf.config';

export function validateConf(config: Record<string, unknown>) {
  const validated = plainToInstance(Conf, config, {
    enableImplicitConversion: false,
    exposeDefaultValues: true,
  });
  const errors = validateSync(validated, { skipMissingProperties: false });

  if (!errors.length) return validated;

  throw new Error(errors.toString());
}
