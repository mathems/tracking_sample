import { faker } from '@faker-js/faker';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as req from 'supertest';
import { fixture } from '../../test/fixture';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';

const {
  endpoint: { POST, PUT },
} = fixture;

describe('TrackController', () => {
  describe('Check dto validations', () => {
    let app: INestApplication;

    beforeAll(async () => {
      const fixture: TestingModule = await Test.createTestingModule({
        controllers: [TrackController],
        providers: [
          {
            provide: TrackService,
            useValue: {
              changeStatus: jest.fn(),
              getById: jest.fn(),
              getMany: jest.fn(),
              insert: jest.fn(),
              rm: jest.fn(),
              updateTrack: jest.fn(),
            } satisfies Record<keyof TrackService, typeof jest.fn>,
          },
        ],
      }).compile();

      app = await fixture
        .createNestApplication()
        .useGlobalPipes(
          new ValidationPipe({
            transform: true,
            transformOptions: {
              exposeDefaultValues: true,
              enableImplicitConversion: false,
            },
          }),
        )
        .init();
    });

    afterAll(async () => {
      await app?.close();
    });

    it.each(
      [
        ...(
          [
            { needle: faker.lorem.word() },
            { options: { someOption: true } },
            { status: 'pause', needle: faker.lorem.word() },
          ] as UpdateTrackDto[]
        ).map((data) => ({
          method: 'put',
          endpoint: PUT.updateTrack(faker.database.mongodbObjectId()),
          status: 200,
          data,
        })),
        ...(
          [
            { needle: faker.lorem.words(1) },
            { needle: faker.lorem.words(2), options: {} },
            { needle: faker.lorem.words(1), status: 'active' },
            { needle: faker.lorem.words(1), status: 'block' },
            { needle: faker.lorem.words(1), status: 'pause' },
            { needle: faker.lorem.words(1), status: 'pause', options: {} },
          ] as CreateTrackDto[]
        ).map((data) => ({
          method: 'post',
          endpoint: POST.createTrack,
          status: 201,
          data,
        })),
      ].map((testData) => ({
        ...testData,
        message: JSON.stringify(testData.data),
      })) as {
        method: 'post' | 'put' | 'get' | 'patch';
        endpoint: string;
        data: any;
        status: 200 | 201 | 204;
        message: string;
      }[],
    )(
      'Should be $status $method $endpoint $message',
      async ({ data, endpoint, method, status }) => {
        await req(app.getHttpServer())
          [method](endpoint)
          .send(data)
          .expect(status);
      },
    );
  });
});
