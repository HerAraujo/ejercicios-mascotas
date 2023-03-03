import { Injectable } from '@nestjs/common';
import { UsersDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  private users: UsersDto[] = [
    {
      id: 1,
      name: 'Hernan',
      age: 20,
      email: 'hernan@gmail.com',
      gender: 'male',
    },
    {
      id: 2,
      name: 'Pablo',
      age: 31,
      email: 'pablo@gmail.com',
      gender: 'male',
    },
    {
      id: 3,
      name: 'Lucia',
      age: 29,
      email: 'lucia@gmail.com',
      gender: 'female',
    },
  ];
  findAll() {
    return this.users;
  }

  findById(id: number) {
    const user = this.users.find((user) => {
      if (+user.id === +id) {
        return user;
      }
    });
    return user;
  }

  createUser(usersDto: UsersDto) {
    this.users.push(usersDto);

    return `User "${usersDto.name}" creado con éxito`;
  }
}
