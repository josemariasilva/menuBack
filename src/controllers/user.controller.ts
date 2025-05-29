import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from 'src/services/user.service';



@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): any {
    return this.userService.findAll();
  }

}
