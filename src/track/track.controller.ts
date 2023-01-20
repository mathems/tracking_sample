import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { MongoIdDto } from '../common/dto/mongo-id.dto';
import { CreateTrackDto } from './dto/create-track.dto';

@Controller('track')
export class TrackController {
  @Post()
  createTrack(@Body() body: CreateTrackDto) {
    // TODO
  }

  @Delete(':_id')
  @HttpCode(HttpStatus.NO_CONTENT)
  rmTrack(@Param() { _id }: MongoIdDto) {
    // TODO
  }

  @Get(':_id')
  getOne(@Param() { _id }: MongoIdDto) {
    // TODO
  }

  @Get()
  getWithPagination() {
    // TODO
  }
}
