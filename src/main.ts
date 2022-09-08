import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const PORT = config.get('API_PORT');

  await app.listen(PORT || 3001, () => {
    console.log(`App starten on porn: ${PORT}`);
  });
}

bootstrap();