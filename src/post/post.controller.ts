import {Body, Controller, Headers, Post} from '@nestjs/common';
import {PostService} from "./post.service";
import {postInterface} from "./post.interface";


@Controller('/post')
export class PostController {

    constructor(private postService:PostService) {
    }

    @Post('post')
    post(@Body() postInterface:postInterface ){
        let token="OPQxDPp3s2A�_���3�"
        this.postService.postService(postInterface.content,token).then(value => {

        })
    }
}
