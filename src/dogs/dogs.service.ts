import { Injectable } from '@nestjs/common';
import { DogsDto } from './dto/dogs.dto';

@Injectable()
export class DogsService {
  private dogs: DogsDto[] = [
    {
      id: 1,
      name: 'Shagui',
      age: 2,
      breed: 'poodle',
      gender: 'male',
    },
    {
      id: 2,
      name: 'Oso',
      age: 11,
      breed: 'Police',
      gender: 'male',
    },
    {
      id: 3,
      name: 'Rocco',
      age: 4,
      breed: 'alsatian',
      gender: 'male',
    },
  ];

  findAll() {
    return this.dogs;
  }

  findById(id: number) {
    const dog = this.dogs.find((dog) => {
      if (+dog.id === +id) {
        return dog;
      }
    });
    return dog;
  }

  createDog(dogsDto: DogsDto) {
    this.dogs.push(dogsDto);

    return `${dogsDto.name} creado con éxito`;
  }
}
