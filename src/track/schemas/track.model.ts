import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TRACK } from '../../common/const/collection-name.const';
import { BaseModel } from '../../common/db/base-model';
import { ITrack } from '../../common/types/track/track-interface.type';
import { TrackStatus } from '../../common/types/track/track-status-enum.type';

@Schema({
  collection: TRACK,
  timestamps: true,
})
export class TrackModel extends BaseModel implements ITrack {
  @Prop({ required: true })
  needle: string;

  @Prop({ enum: TrackStatus, default: TrackStatus.ACTIVE })
  status: TrackStatus;

  @Prop({ type: Object })
  options: Record<string, unknown>;
}

export type TrackDocument = HydratedDocument<TrackModel>;
export const TrackSchema = SchemaFactory.createForClass(TrackModel);
