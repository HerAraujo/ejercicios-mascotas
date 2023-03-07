import { Injectable, NotFoundException } from '@nestjs/common';
import { Dogs } from '../entity/dogs.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class DogRepository {
  private dogs: Dogs[];

  constructor() {
    this.dogs = [
      {
        id: uuid(),
        name: 'Shagui',
        age: 2,
        breed: 'poodle',
        gender: 'male',
      },
      {
        id: uuid(),
        name: 'Oso',
        age: 11,
        breed: 'Police',
        gender: 'male',
      },
      {
        id: uuid(),
        name: 'Rocco',
        age: 4,
        breed: 'alsatian',
        gender: 'male',
      },
    ];
  }

  findAll() {
    return this.dogs;
  }

  findById(id: string) {
    const dog = this.dogs.find((dog) => dog.id === id);
    try {
      if (!dog) {
        throw new NotFoundException(`Dog with id ${id} not found`);
      }
      return dog;
    } catch (error) {
      throw new Error(error);
    }
  }

  createDog(dog: Dogs) {
    this.dogs.push(dog);

    return dog;
  }

  update(updatedDog: Dogs): Dogs {
    try {
      this.dogs.map((dog) => {
        if (dog.id === updatedDog.id) dog = updatedDog;
      });
      return updatedDog;
    } catch (error) {
      throw new Error(error);
    }
  }

  deleteDog(id: string) {
    try {
      this.dogs = this.dogs.filter((cat) => cat.id !== id);
      return this.dogs;
    } catch (error) {
      throw new Error(error);
    }
  }
}
