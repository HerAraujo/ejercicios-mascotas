import {
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class DogsDto {
  @IsNumber()
  @Min(1)
  id: number;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  breed: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsString()
  @IsIn(['male', 'female'])
  gender: string;
}
