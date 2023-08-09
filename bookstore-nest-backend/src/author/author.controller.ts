import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './dto';

@Controller('api/authors')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Get()
  async getAuthors() {
    return this.authorService.getAuthors();
  }

  @Post()
  async addAuthor(@Body() dto: Author) {
    return this.authorService.addAuthor(dto);
  }

  @Delete('/:id')
  async deleteAuthor(@Param('id') id: number) {
    return this.authorService.deleteAuthor(id);
  }
}
