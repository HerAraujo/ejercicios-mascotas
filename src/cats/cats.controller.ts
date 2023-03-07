import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CatsDto } from './dto/cats.dto';
import { CatsService } from './cats.service';
import { UpdateCatDto } from './dto/updateCats.dto';

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
  /*  @Patch(':id')
  updateCat(@Param('id', ParseIntPipe) id: number, updateCatDto: UpdateCatDto) {
    return this.catsService.updateCat(id, updateCatDto);
  }
  @Delete(':id')
  deleteCat(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.removeCat(id);
  } */
}
