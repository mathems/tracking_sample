import { OmitType, PartialType } from '@nestjs/mapped-types';
import { FullTrackDto } from './full-track.dto';

export class UpdateTrackDto extends PartialType(
  OmitType(FullTrackDto, ['_id']),
) {}
