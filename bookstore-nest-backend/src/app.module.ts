import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [BookModule, PrismaModule, AuthorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
