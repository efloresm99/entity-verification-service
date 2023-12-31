import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: process.env.MICRO_HOST,
      port: +process.env.MICRO_PORT || 3001,
    },
  });
  app.listen();
}
bootstrap();
