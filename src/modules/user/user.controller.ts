import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): any {
    return this.userService.findAll();
  }
}
