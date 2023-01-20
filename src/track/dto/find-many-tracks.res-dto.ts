import { PaginationQueryDto } from '../../common/dto/pagination.dto';
import { TrackModel } from '../schemas/track.model';
import { FilterByTrackStatusDto } from './filter-by-track-status.dto';
import { SortTracksDto } from './sort-tracks.dto';

class FindManyTracksMetaResDto {
  pagination: PaginationQueryDto;
  sort: SortTracksDto;
  filter: FilterByTrackStatusDto;
}

export class FindManyTracksResDto {
  meta: FindManyTracksMetaResDto;
  items: TrackModel[];

  constructor(items: TrackModel[], meta: FindManyTracksMetaResDto) {
    this.items = items;
    this.meta = meta;
  }
}
