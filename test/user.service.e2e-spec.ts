import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { UserController } from 'src/modules/user/user.controller';
import { UserService } from 'src/modules/user/user.service';
import { UserEntity } from 'src/shared/entities/user/user.entity';
import { Repository } from 'typeorm';

describe('UserService', () => {
  let app: INestApplication<App>;
  let userService: UserService;
  let userController: UserController;
  let userRepository: Partial<Repository<UserEntity>>;

  beforeEach(async () => {
    userRepository = {
      find: jest.fn(),
    };
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    app = moduleFixture.createNestApplication();
    userService = new UserService(userRepository as Repository<UserEntity>);
    userController = new UserController(userService);
    await app.init();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer()).get('/users').expect(200);
  });

  it('/users (POST)', () => {
    return request(app.getHttpServer()).post('/users').expect(302);
  });
});
