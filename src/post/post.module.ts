import {forwardRef, Module} from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import {UsersModule} from "../users/users.module";

@Module({
  imports:[forwardRef(() => UsersModule)],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
