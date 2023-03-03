import { Injectable } from '@nestjs/common';
import { CatsDto } from './dto/cats.dto';

@Injectable()
export class CatsService {
  private cats: CatsDto[] = [
    {
      id: 1,
      name: 'Betina',
      age: 2,
      breed: 'Siverian',
      gender: 'female',
    },
    {
      id: 2,
      name: 'Bono',
      age: 11,
      breed: 'Persian',
      gender: 'male',
    },
    {
      id: 3,
      name: 'Hatila',
      age: 4,
      breed: 'Siamese',
      gender: 'female',
    },
  ];

  findAll() {
    return this.cats;
  }

  findById(id: number) {
    const cat = this.cats.find((cat) => {
      if (+cat.id === +id) {
        return cat;
      }
    });
    return cat;
  }

  createCat(catsDto: CatsDto) {
    this.cats.push(catsDto);

    return `${catsDto.name} creado con éxito`;
  }
}
