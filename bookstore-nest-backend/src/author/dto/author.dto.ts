import { IsNotEmpty, IsString } from 'class-validator';

export class Author {
  @IsString()
  @IsNotEmpty()
  name: string;
}
