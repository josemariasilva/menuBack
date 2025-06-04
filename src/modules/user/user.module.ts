import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from 'src/modules/user/user.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/entities/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
