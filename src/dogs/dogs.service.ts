import { BadRequestException, Injectable } from '@nestjs/common';
import { DogsDto } from './dto/dogs.dto';
import { v4 as uuid } from 'uuid';
import { UpdateDogDto } from './dto/updateDogs.dto';
import { DogRepository } from './reopsitory/dog.repository';
import { Dogs } from './entity/dogs.entity';

@Injectable()
export class DogsService {
  constructor(private readonly dogRepository: DogRepository) {}

  getAll(): Dogs[] {
    return this.dogRepository.findAll();
  }

  findOne(name: string): Dogs {
    return this.dogRepository.findById(name);
  }

  create(createDogDTO: DogsDto): Dogs {
    const dog = {
      id: uuid(),
      ...createDogDTO,
      /* name: createDogDTO.name,
        breed: createDogDTO.breed,
        age: createDogDTO.age,
        gender: createDogDTO.gender, */
    };
    return this.dogRepository.createDog(dog);
  }

  update(updateDogDTO: UpdateDogDto, id: string) {
    console.log(updateDogDTO, id);

    return this.dogRepository.update(updateDogDTO, id);
  }

  deleteOne(id: string) {
    return this.dogRepository.deleteDog(id);
  }
}
