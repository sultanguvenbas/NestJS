import {forwardRef, Module} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {Pool} from "pg";
import {DatabaseService} from "./database.service";
import {UsersModule} from "../users/users.module";
import {PostService} from "../post/post.service";
import {usersService} from "../users/users.service";

const databasePoolFactory = async (configService: ConfigService) => {
    return new Pool({
        user:configService.get('USER') || 'postgres',
        host: configService.get('HOST')|| 'localhost',
        database:configService.get('DB')||  'homework4',
        password: configService.get('PASSWORD')|| '',
        port:Number.parseInt(configService.get('PORT'))|| 5432,
    });
};

@Module({
    providers: [
        {
            provide: 'DATABASE_POOL',
            inject: [ConfigService],
            useFactory: databasePoolFactory,
        },
        DatabaseService,PostService,usersService
    ],
    exports: [DatabaseService],
})


export class DatabaseModule {}
