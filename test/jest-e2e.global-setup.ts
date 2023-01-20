import { config } from 'dotenv';
import { join } from 'path';

config({ path: join(process.cwd(), '.test.env') });

export default async () => {
  // TODO
};
