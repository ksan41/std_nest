import { Controller, Post, Body, Query, Param, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUserDto';
import { VerifyEmailDto } from './dto/VerifyEmailDto';
import { UserLoginDto } from './dto/UserLoginDto';
import { UserInfo } from './UserInfo';

@Controller('users')
export class UsersController {
  @Post()
  async create(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    console.log(userId);
    return;
  }
}
