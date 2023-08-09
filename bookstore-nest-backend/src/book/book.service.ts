import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Book, BookAuthor } from './dto';

@Injectable({})
export class BookService {
  constructor(private prisma: PrismaService) {}

  async getBooks(): Promise<BookAuthor[]> {
    return this.prisma.$queryRaw`
    SELECT
      b.id,
      b.title,
      b."publicationDate",
      b.image,
      a.name AS author,
      a.id AS "authorId"
      FROM public."Book" b
      INNER JOIN public."Author" a ON a.id = b."authorId"
    `;
  }

  async addBook(book: Book) {
    const { title, author, publicationDate, image } = book;
    return this.prisma.book.create({
      data: { title, authorId: author, publicationDate, image },
    });
  }

  async updateBook(id: number, book: Book) {
    const { title, author, publicationDate, image } = book;
    return this.prisma.book.update({
      where: {
        id,
      },
      data: { title, authorId: author, publicationDate, image },
    });
  }

  async deleteBook(id: number) {
    return this.prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
