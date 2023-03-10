import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder().setTitle("Test api").setDescription("Here we will add api description").setVersion("1.0.0").build();
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('/api-docs',app,document);
  await app.listen(3000);
} 
bootstrap();


// Generate Migration 

// npm run migration:generate -- db/migrations/migrationName

// Run Migration

//  npm run migration:run