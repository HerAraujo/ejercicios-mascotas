import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/createCat.dto';
import { UpdateCatDto } from './dto/updateCat.dto';
import { CatRepository } from './repository/cats.repository';
import { v4 as uuid } from 'uuid';
@Injectable()
export class CatsService {
  constructor(private readonly catRepository: CatRepository) {}

  getAll() {
    return this.catRepository.findAll();
  }

  getOne(id: string) {
    return this.catRepository.findById(id);
  }

  createCat(createCatDto: CreateCatDto) {
    const cat = {
      id: uuid(),
      ...createCatDto,
    };
    this.catRepository.createCat(cat);

    return cat;
  }

  update(updateCatDTO: UpdateCatDto, id: string) {
    const catToUpdate = this.getOne(id);
    return this.catRepository.update(updateCatDTO, id);
  }

  removeCat(id: string) {
    return this.catRepository.deleteCat(id);
  }
}
