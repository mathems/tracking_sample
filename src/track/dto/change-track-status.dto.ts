import { PickType } from '@nestjs/mapped-types';
import { FullTrackDto } from './full-track.dto';

export class ChangeTrackStatusDto extends PickType(FullTrackDto, ['status']) {}
