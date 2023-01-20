import { OmitType } from '@nestjs/mapped-types';
import { FullTrackDto } from './full-track.dto';

export class CreateTrackDto extends OmitType(FullTrackDto, [
  '_id',
  'created_at',
  'updated_at',
]) {}
