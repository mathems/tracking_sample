import { IsDate, IsIn, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { MongoIdDto } from '../../common/dto/mongo-id.dto';
import { ITrack } from '../../common/types/track/track-interface.type';
import { TrackStatus } from '../../common/types/track/track-status-enum.type';

export class FullTrackDto extends MongoIdDto implements ITrack {
  @IsString()
  @IsNotEmpty()
  needle: string;

  @IsIn(Object.values(TrackStatus))
  status: TrackStatus;

  @IsObject()
  options: Record<string, unknown>;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
