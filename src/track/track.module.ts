import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModel, TrackSchema } from './schemas/track.model';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TrackModel.name, schema: TrackSchema }]),
  ],
  providers: [TrackService],
  controllers: [TrackController],
})
export class TrackModule {}
