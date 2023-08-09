import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE,OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, token, authorization, Authorization, x-protocol-version, X-Protocol-Version, x-csrf, X-CSRF, x-sub-account, X-Sub-Account, x-nb-session-id, X-NB-Session-Id, x-brand, X-Brand',
    );
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    next();
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();
