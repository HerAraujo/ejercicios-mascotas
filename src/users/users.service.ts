import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersDto } from './dto/users.dto';
import { v4 as uuid } from 'uuid';
import { User } from './entity/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  /* private users: User[] = [
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
  ]; */
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findById(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  async insert(userDto: UsersDto) {
    const user = this.userRepository.create(userDto);
    await this.userRepository.save(user);
    return user;
  }

  async update(updateUserDTO: UpdateUserDto, id: string) {
    const userToUpdate = {
      id,
      ...updateUserDTO,
    };
    const product = await this.userRepository.preload(userToUpdate);
    if (userToUpdate) {
      return this.userRepository.save(product);
    }
    throw new NotFoundException(`No se encuentra el producto ${id}`);
  }

  removeUser(id: string) {
    return this.userRepository.delete(id);
  }
}
