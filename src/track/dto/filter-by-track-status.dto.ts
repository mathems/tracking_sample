import { IsIn, IsOptional } from 'class-validator';
import { ITrack } from '../../common/types/track/track-interface.type';
import { TrackStatus } from '../../common/types/track/track-status-enum.type';

export class FilterByTrackStatusDto implements Pick<ITrack, 'status'> {
  @IsOptional()
  @IsIn(Object.values(TrackStatus))
  status: TrackStatus;
}
