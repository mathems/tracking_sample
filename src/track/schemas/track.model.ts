import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BaseModel } from '../../common/db/base-model';
import { ITrack } from '../../common/types/track/track-interface.type';
import { TrackStatus } from '../../common/types/track/track-status-enum.type';

@Schema()
export class TrackModel extends BaseModel implements ITrack {
  @Prop({ required: true })
  needle: string;

  @Prop({ enum: TrackStatus, default: TrackStatus.ACTIVE })
  status: TrackStatus;

  @Prop({ type: Types.Subdocument })
  options: Record<string, unknown>;
}

export type TrackDocument = HydratedDocument<TrackModel>;
export const TrackSchema = SchemaFactory.createForClass(TrackModel);
