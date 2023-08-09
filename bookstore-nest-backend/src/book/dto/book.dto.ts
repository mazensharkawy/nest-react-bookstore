import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class Book {
  id?: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  author: number;

  @IsString()
  @IsNotEmpty()
  publicationDate: string;

  @IsString()
  image?: string;
}
