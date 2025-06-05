import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { UserEntity } from 'src/shared/entities/user/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getUsers(): any {
    return this.userService.findAll();
  }

  @Post('/register')
  postUser(@Body() user_: UserEntity): Promise<any> {
    return this.userService.putUser(user_);
  }
}
