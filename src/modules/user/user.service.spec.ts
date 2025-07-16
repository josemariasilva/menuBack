import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserEntity } from '../../shared/entities/user/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';

describe('userService', () => {
  let userService: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            find: jest.fn(() =>
              Promise.resolve([
                {
                  id: 1,
                  name: 'JOSELITO',
                  email: 'ZEQUINHA@12.COM',
                  password: '123',
                  telephone: '',
                },
              ]),
            ),
            findOneBy: jest.fn(),
          },
        },
      ],
    }).compile();

    userService = module.get(UserService);
    userRepository = module.get(getRepositoryToken(UserEntity));
  });

  it('service should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('should return users', async () => {
    const users = await userService.findAll();

    expect(users).toEqual([
      {
        id: 1,
        name: 'JOSELITO',
        email: 'ZEQUINHA@12.COM',
        password: '123',
        telephone: '',
      },
    ]);
  });

  it('should not create user already', async () => {
    jest.spyOn(userRepository, 'findOneBy').mockResolvedValue({
      name: 'JOSELITO',
      email: 'ZEQUINHA@12.COM',
      password: '123',
      telephone: '',
    });
    const response = await userService.createUser({
      name: 'JOSELITO',
      email: 'ZEQUINHA@12.COM',
      password: '123',
      telephone: '',
    });

    expect(response).toEqual({
      statusCode: HttpStatus.FOUND,
      response: { result: 'user already exist' },
    });
  });
});
