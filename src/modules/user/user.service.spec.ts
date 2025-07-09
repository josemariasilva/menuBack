import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserEntity } from '../../shared/entities/user/user.entity';

describe('userService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserEntity,
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
          },
        },
      ],
    }).compile();

    userService = module.get(UserService);
  });

  it('service should be defined', () => {
    expect(userService).toBeDefined();
  });
});
