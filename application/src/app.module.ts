import { Module } from '@nestjs/common';
import { ApiController } from './api/api.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [ApiController, UsersController],
  providers: [],
})
export class AppModule {}
