import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from 'src/services/user.service';
import { userProviders } from 'src/entities/user/user.provider';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
