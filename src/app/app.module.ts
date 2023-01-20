import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Conf } from '../common/config/conf.config';
import { ConfModule } from '../common/config/conf.module';
import { TrackModule } from '../track/track.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory(conf: ConfigService<Conf>) {
        return {
          user: conf.get('MONGO_USER'),
          pass: conf.get('MONGO_PASS'),
          port: conf.get('MONGO_PORT'),
          dbName: conf.get('MONGO_DB'),
        };
      },
    }),
    TrackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
