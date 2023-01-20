import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { MongoIdDto } from '../common/dto/mongo-id.dto';
import { PaginationQueryDto } from '../common/dto/pagination.dto';
import { PaginationResDto } from '../common/dto/res/pagination.res-dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { GetTrackByIdResDto } from './dto/res/get-track-by-id.res-dto';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  createTrack(@Body() body: CreateTrackDto) {
    return this.trackService.insert(body);
  }

  @Delete(':_id')
  @HttpCode(HttpStatus.NO_CONTENT)
  rmTrack(@Param() { _id }: MongoIdDto) {
    return this.trackService.rm(_id);
  }

  @Get(':_id')
  async getOne(
    @Param() { _id }: MongoIdDto,
  ): Promise<GetTrackByIdResDto | Record<never, never>> {
    return this.trackService.getById(_id);
  }

  @Get()
  getWithPagination(
    @Query() options: PaginationQueryDto,
  ): Promise<PaginationResDto<GetTrackByIdResDto>> {
    return this.trackService.getMany(options);
  }
}
