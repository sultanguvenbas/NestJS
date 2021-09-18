import {forwardRef, Module} from '@nestjs/common';
import {PostModule} from "../post/post.module";

@Module({
    imports:[forwardRef(() => PostModule)],

})
export class UsersModule {}
