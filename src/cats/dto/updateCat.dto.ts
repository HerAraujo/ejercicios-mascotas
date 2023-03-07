import { IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpdateCatDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  breed: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  age: number;

  @IsString()
  @IsIn(['male', 'female'])
  @IsOptional()
  gender: string;
}
