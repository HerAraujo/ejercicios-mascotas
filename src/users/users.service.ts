import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersDto } from './dto/users.dto';
import { v4 as uuid } from 'uuid';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: uuid(),
      name: 'Hernan',
      age: 20,
      email: 'hernan@gmail.com',
    },
    {
      id: uuid(),
      name: 'Pablo',
      age: 31,
      email: 'pablo@gmail.com',
    },
    {
      id: uuid(),
      name: 'Lucia',
      age: 29,
      email: 'lucia@gmail.com',
    },
  ];
  findAll() {
    return this.users;
  }

  findById(id: string) {
    const user = this.users.find((user) => +user.id === +id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  createUser(userDto: UsersDto) {
    const newUser = {
      id: uuid(),
      ...userDto,
    };
    this.users.push(newUser);
    return newUser;
  }
}
