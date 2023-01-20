import { Transform } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @Transform(({ value }) => +value)
  @IsInt()
  limit = 10;

  @IsOptional()
  @Transform(({ value }) => +value)
  @IsInt()
  skip = 0;
}
