import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
    'mongodb+srv://n3vilreal:AamaCareCluster@aamacare-cluster.7dgof76.mongodb.net/?retryWrites=true&w=majority&appName=AamaCare-Cluster'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
