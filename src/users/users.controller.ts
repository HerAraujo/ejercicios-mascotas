import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { UsersDto } from './dto/users.dto';
import { User } from './entity/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getDUserById(@Param('id', ParseUUIDPipe) id: string): User {
    return this.usersService.findById(id);
  }
  @Post()
  createUser(@Body() usersDto: UsersDto) {
    return this.usersService.createUser(usersDto);
  }
}
