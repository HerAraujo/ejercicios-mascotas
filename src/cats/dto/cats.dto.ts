import { IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CatsDto {
  @IsInt()
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
