import { Module } from '@nestjs/common';
import { ConfModule } from '../common/config/conf.module';
import { TrackModule } from '../track/track.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfModule, TrackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
