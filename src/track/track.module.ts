import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TRACK } from '../common/const/collection-name.const';
import { TrackModel, TrackSchema } from './schemas/track.model';
import { TrackController } from './track.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TrackModel.name, schema: TrackSchema, collection: TRACK },
    ]),
  ],
  controllers: [TrackController],
})
export class TrackModule {}
