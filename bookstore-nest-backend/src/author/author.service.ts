import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Author } from './dto';
// create service to add, delete and get Authors
@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async getAuthors() {
    return this.prisma.author.findMany();
  }

  async addAuthor(author: Author) {
    console.log({ author });
    return this.prisma.author.create({ data: author });
  }

  async deleteAuthor(id: number) {
    return this.prisma.author.delete({ where: { id } });
  }
}
