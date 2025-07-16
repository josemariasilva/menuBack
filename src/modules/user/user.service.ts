import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../shared/entities/user/user.entity';
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

  async createUser(user: UserEntity): Promise<httpResponseInterface> {
    const isFoundedUser = await this.userRepository.findOneBy({
      email: user.email,
    });

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
