import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MotherProfileModule } from './mother-profile/mother-profile.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot(
    'mongodb+srv://n3vilreal:AamaCareCluster@aamacare-cluster.7dgof76.mongodb.net/AamaCare-Database?retryWrites=true&w=majority&appName=AamaCare-Cluster'),
    MotherProfileModule,
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
