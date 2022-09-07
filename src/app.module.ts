import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true, envFilePath: '.env'}),
    TypeOrmModule.forRootAsync({
			imports: [ ConfigModule ],
			inject: [ ConfigService ],
			useFactory: async (config: ConfigService) => ({
				// type: config.get<'aurora-data-api'>('TYPEORM_CONNECTION'),
        		type: 'postgres',
				// host: config.get<string>('TYPEORM_HOST'),
				username: config.get<string>('TYPEORM_USERNAME'),
				password: config.get<string>('TYPEORM_PASSWORD'),
				database: config.get<string>('TYPEORM_DATABASE'),
				port: config.get<number>('TYPEORM_PORT'),
				entities: [ __dirname + 'dist/**/*.entity{.ts,.js}' ],
				synchronize: true,
				autoLoadEntities: true,
				logging: true,
			}),
		}),
  ],
  providers: [],
})
export class AppModule {}