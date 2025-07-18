import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../../../shared/entities/user/user.entity';
import { httpResponseInterface } from 'src/shared/protocols/interfaces/httpResponse.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findByEmail(email_user: string): Promise<UserEntity> {
    const userEmail: UserEntity = await this.userRepository.findOneByOrFail({
      email: email_user,
    });
    return userEmail;
  }

  async createUser(user: UserEntity): Promise<httpResponseInterface> {
    const isFoundedUser = await this.findByEmail(user.email);

    if (isFoundedUser) {
      return {
        statusCode: HttpStatus.FOUND,
        response: { result: 'user already exist' },
      };
    }

    const response = await this.userRepository.save(user);

    return { statusCode: HttpStatus.CREATED, response };
  }
}
