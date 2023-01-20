import { IntersectionType, PartialType, PickType } from '@nestjs/mapped-types';
import { FullTrackDto } from './full-track.dto';

export class CreateTrackDto extends IntersectionType(
  PickType(FullTrackDto, ['needle']),
  PartialType(PickType(FullTrackDto, ['options', 'status'])),
) {}
