import {
  IsEmail,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class UsersDto {
  @IsInt()
  id: number;

  @IsString()
  @Length(3, 10)
  name: string;

  @IsInt()
  @Min(18)
  age: number;

  @IsString()
  @IsIn(['male', 'female'])
  gender: string;

  @IsString()
  @IsEmail()
  email: string;
}
