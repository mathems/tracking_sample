import { IsIn } from 'class-validator';
import { SortBy, SortByType } from '../../common/const/dto.const';

export class SortTracksDto {
  @IsIn(Object.values(SortBy))
  sortBy: SortBy = SortBy.CREATED_AT;

  @IsIn(Object.values(SortByType))
  sortByType: SortByType = SortByType.DESC;
}
