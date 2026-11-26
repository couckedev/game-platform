import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthcheckController } from '../controllers/healthcheck.controller.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../../.env'],
    }),
  ],
  controllers: [HealthcheckController],
})
export class AppModule {}
