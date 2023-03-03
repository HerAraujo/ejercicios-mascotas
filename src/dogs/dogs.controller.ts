import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsDto } from './dto/dogs.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getDogs(): DogsDto[] {
    return this.dogsService.findAll();
  }

  @Get(':id')
  getDogById(@Param('id', ParseIntPipe) id: number): DogsDto {
    return this.dogsService.findById(Number(id));
  }

  @Post()
  createDogs(@Body() dogsDto: DogsDto) {
    return this.dogsService.createDog(dogsDto);
  }
}
