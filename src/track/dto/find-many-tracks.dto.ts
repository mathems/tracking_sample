import { IntersectionType } from '@nestjs/mapped-types';
import { PaginationQueryDto } from '../../common/dto/pagination.dto';
import { FilterByTrackStatusDto } from './filter-by-track-status.dto';
import { SortTracksDto } from './sort-tracks.dto';

export class FindManyTracksDto extends IntersectionType(
  FilterByTrackStatusDto,
  SortTracksDto,
  PaginationQueryDto,
) {}
