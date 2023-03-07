import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsDto } from './dto/dogs.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getDogs(): DogsDto[] {
    return this.dogsService.getAll();
  }

  @Get(':id')
  getDogById(@Param('id', ParseUUIDPipe) id: string): DogsDto {
    return this.dogsService.findOne(id);
  }

  @Post()
  createDogs(@Body() dogsDto: DogsDto) {
    return this.dogsService.create(dogsDto);
  }
}
