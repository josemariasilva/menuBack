import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../../../shared/entities/user/user.entity';
import { httpResponseInterface } from 'src/shared/protocols/interfaces/httpResponse.interface';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly userService?: UserService,
  ) {}

  async userValidation(email: string): Promise<UserEntity | null> {
    const emailFound = await this.userService?.findByEmail(email);
    if (emailFound) {
      return emailFound;
    }
    return null;
  }
}
