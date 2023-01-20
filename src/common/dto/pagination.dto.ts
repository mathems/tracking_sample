import { IsInt, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  limit = 10;

  @IsOptional()
  @IsInt()
  skip = 0;
}
