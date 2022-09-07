import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get('API_PORT');

  await app.listen(PORT || 3000, () => {
    console.log(`App starten on porn: ${PORT}`);
  });
}

bootstrap();