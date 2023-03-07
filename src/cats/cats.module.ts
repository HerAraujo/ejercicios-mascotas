import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatRepository } from './repository/cats.repository';

@Module({
  controllers: [CatsController],
  providers: [CatsService, CatRepository],
})
export class CatsModule {}
