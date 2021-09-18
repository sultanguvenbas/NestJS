import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import {usersService} from "./users/users.service";
import {UserController} from "./users/users.controller";
import { PostModule } from './post/post.module';
import {PostController} from "./post/post.controller";
import {PostService} from "./post/post.service";

@Module({
  imports: [
      ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['env/.env'],
  }),
      DatabaseModule,
      UsersModule,
      PostModule,],
  controllers: [AppController,UserController,PostController],
  providers: [AppService,usersService,PostService],
})
export class AppModule {}
