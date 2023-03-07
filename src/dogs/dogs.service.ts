import { BadRequestException, Injectable } from '@nestjs/common';
import { DogsDto } from './dto/dogs.dto';
import { v4 as uuid } from 'uuid';
import { UpdateDogDto } from './dto/updateDogs.dto';
import { DogRepository } from './reopsitory/dog.repository';
import { Dogs } from './entity/dogs.entity';

@Injectable()
export class DogsService {

    constructor(
        private readonly dogRepository: DogRepository,
    ) {}

    getAll(): Dogs[] {
        return this.dogRepository.findAll();
    }

    findOne(name: string): Dogs {
        return this.dogRepository.findById(name);
    }

    create(createDogDTO: DogsDto): Dogs {
       const dog = {
        id: uuid(),
        ...createDogDTO
        /* name: createDogDTO.name,
        breed: createDogDTO.breed,
        age: createDogDTO.age,
        gender: createDogDTO.gender, */
    }
    return this.dogRepository.createDog(dog);
    }

    update(updateDogDTO: UpdateDogDto, id: string): Dogs {
        const newDog = {
            id: id,
            ...updateDogDTO
        }
        return this.dogRepository.update(newDog);
    }

    deleteOne(id: string): string {
        return this.dogRepository.deleteDog(id) ? `Dog with id: ${id} successfully deleted` : `Dog with id: ${id} not found`;
    }
  }
 /*  private dogs: DogsDto[] = [
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
  ]; */

