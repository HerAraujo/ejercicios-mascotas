import { PartialType } from '@nestjs/mapped-types';
import { CatsDto } from './cats.dto';

export class UpdateCatDto extends PartialType(CatsDto) {}
