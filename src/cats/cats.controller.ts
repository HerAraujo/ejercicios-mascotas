import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CatsDto } from './dto/cats.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): CatsDto[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  getCatById(@Param('id', ParseIntPipe) id: number): CatsDto {
    return this.catsService.findById(Number(id));
  }
  @Post()
  createCat(@Body() catsDto: CatsDto) {
    return this.catsService.createCat(catsDto);
  }
}
