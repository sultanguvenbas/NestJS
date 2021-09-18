import {Injectable} from "@nestjs/common";
import {DatabaseService} from "../database/database.service";
import {randomBytes} from "crypto";
var randomstring = require("randomstring");

function generateToken(){
    let key = randomstring.generate(10);
    let apiKey= randomBytes(10);
    let token = key+apiKey

    return token
}

@Injectable()
export class usersService{

    constructor(private db:DatabaseService) {
    }
    // deneme():string{
    //     return  "DEne Beni"
    // }

    loginService(username:string){
        return this.db.executeQuery("select token,password from users_table where username=$1",[username])
    }

    singupService(username:string,password:string){
        let token = generateToken()
        return this.db
            .executeQuery("insert into users_table( username, password, token) values($1,$2,$3) ",[username,password,token])
    }

}