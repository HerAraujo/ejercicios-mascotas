import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): UsersDto[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getDUserById(@Param('id', ParseIntPipe) id: number): UsersDto {
    return this.usersService.findById(Number(id));
  }
  @Post()
  createUser(@Body() usersDto: UsersDto) {
    return this.usersService.createUser(usersDto);
  }
}
