import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { MongoIdDto } from '../common/dto/mongo-id.dto';

@Controller('track')
export class TrackController {
  @Post()
  createTrack() {
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
