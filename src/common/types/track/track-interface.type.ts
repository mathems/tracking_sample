import { IModel } from '../model-interface.type';
import { TrackStatus } from './track-status-enum.type';

export interface ITrack extends IModel {
  needle: string;
  status: TrackStatus;
  // TODO define more concrete type for /options/
  options: Record<string, unknown>;
}
