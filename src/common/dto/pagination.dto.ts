import { Transform } from 'class-transformer';
import { IsInt } from 'class-validator';

export class PaginationQueryDto {
  @Transform(({ value }) => +value)
  @IsInt()
  limit = 10;

  @Transform(({ value }) => +value)
  @IsInt()
  skip = 0;
}
