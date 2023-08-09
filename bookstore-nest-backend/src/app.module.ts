import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthorModule } from './author/author.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [
    BookModule,
    PrismaModule,
    AuthorModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../bookstore/dist/'),
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
