import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MongoIdDto } from '../common/dto/mongo-id.dto';
import { PaginationQueryDto } from '../common/dto/pagination.dto';
import { PaginationResDto } from '../common/dto/pagination.res-dto';
import { ChangeTrackStatusDto } from './dto/change-track-status.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { GetTrackByIdResDto } from './dto/get-track-by-id.res-dto';
import { UpdateTrackDto } from './dto/update-track.dto';
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
  async rmTrack(@Param() { _id }: MongoIdDto): Promise<void> {
    await this.trackService.rm(_id);
  }

  @Get(':_id')
  async getOne(@Param() { _id }: MongoIdDto): Promise<GetTrackByIdResDto> {
    return this.trackService.getById(_id);
  }

  @Put(':_id')
  async updateTrack(
    @Param() { _id }: MongoIdDto,
    @Body() body: UpdateTrackDto,
  ): Promise<GetTrackByIdResDto> {
    return this.trackService.updateTrack(_id, body);
  }

  @Patch(':_id')
  async changeStatus(
    @Param() { _id }: MongoIdDto,
    @Body() { status }: ChangeTrackStatusDto,
  ): Promise<GetTrackByIdResDto> {
    return this.trackService.changeStatus(_id, status);
  }

  @Get()
  getWithPagination(
    @Query() options: PaginationQueryDto,
  ): Promise<PaginationResDto<GetTrackByIdResDto>> {
    return this.trackService.getMany(options);
  }
}
