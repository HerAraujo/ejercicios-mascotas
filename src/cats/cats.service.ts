import { Injectable, NotFoundException } from '@nestjs/common';
import { CatsDto } from './dto/cats.dto';
import { UpdateCatDto } from './dto/updateCats.dto';

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
    const cat = this.cats.find((cat) => cat.id === +id);
    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return cat;
  }

  createCat(catsDto: CatsDto) {
    this.cats.push(catsDto);

    return `${catsDto.name} creado con éxito`;
  }

  /*   updateCat(id: number, updateCatDto: UpdateCatDto) {
    let catDB = this.findById(id);

    this.cats = this.cats.map((cat) => {
      if (cat.id === id) {
        catDB = { ...catDB, ...updateCatDto };
        return cat;
      }
    });
    return catDB;
  }

  removeCat(id: number) {
    this.cats = this.cats.filter((cat) => cat.id !== id);
  } */
}
