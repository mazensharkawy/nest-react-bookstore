import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './dto';

@Controller('api/books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async getBooks() {
    return this.bookService.getBooks();
  }

  @Post()
  async addBook(@Body() dto: Book) {
    return this.bookService.addBook(dto);
  }

  @Delete('/:id')
  async deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(parseInt(id));
  }

  @Put('/:id')
  async updateBook(@Param('id') id: string, @Body() body: Book) {
    return this.bookService.updateBook(parseInt(id), body);
  }
}
