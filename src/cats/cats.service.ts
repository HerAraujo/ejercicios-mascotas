import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/createCat.dto';
import { UpdateCatDto } from './dto/updateCat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entity/cat.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  getAll() {
    return this.catsRepository.find();
  }

  getOne(id: string) {
    return this.catsRepository.findOneBy({ id });
  }

  async insert(createCatDto: CreateCatDto) {
    const cat = this.catsRepository.create(createCatDto);
    await this.catsRepository.save(cat);
    return cat;
  }

  async update(updateCatDTO: UpdateCatDto, id: string) {
    const userProduct = {
      id,
      ...updateCatDTO,
    };
    const product = await this.catsRepository.preload(userProduct);
    if (product) {
      return this.catsRepository.save(product);
    }
    throw new NotFoundException(`No se encuentra el producto ${id}`);
  }

  removeCat(id: string) {
    return this.catsRepository.delete(id);
  }
}
