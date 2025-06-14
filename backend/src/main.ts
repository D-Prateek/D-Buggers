// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ---- THIS IS THE FIX ----
  // Enable CORS to allow requests from your React frontend
  app.enableCors();

  // Enable the validation pipe globally to make DTO validation work
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  // -------------------------

  // Your existing Swagger setup (if you have it)
  const config = new DocumentBuilder()
    .setTitle('Aama Care API')
    .setDescription('API documentation for the Aama Care project')
    .setVersion('1.0')
    .addTag('Authentication')
    .addTag('mother-profiles')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();