import {Injectable} from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {randomInt} from "crypto";


function randomNickname() {

    let arrayNick = ["dog", "cat", "butterfly", "duck", "cow", "monkey", "snake", "ant", "bear", "dolphin", "bat", "bird", "crap", "chicken", "deer", "eagle"]
    let rnNumber = randomInt(16)
    let rnNick = arrayNick[rnNumber]

    return rnNick
}

function randomColor() {

    let arrayColor = ["#ff0000", "#ff4000", "#ffbf00", "#00ff00", "#00ffff", "#0040ff", "#8000ff", "#ff00ff", "#ff0040", "#808080"]
    let rnNumber2 = randomInt(10)
    let rnColor = arrayColor[rnNumber2]

    return rnColor
}

@Injectable()
export class PostService {

    constructor(private db: DatabaseService) {
    }

    postService(token, content: string) {
        let dataCreated = new Date(Date.now());
        console.log(dataCreated.toJSON().slice(0,19).replace('T',':'));
        let rnNick = randomNickname()
        let rnColor = randomColor()
        return this.db.executeQuery("with pInfo as (insert into post_table (userid, content, datecreated, likes, dislikes) values ((select userid from users_table where token=$1),$2,$3,0,0)returning postid,userid) insert into post_user_vn_table(postid, userid, nickname, color) values((SELECT postid from pInfo),(SELECT userid from pInfo),$5,$4)  returning postid", [token, content, dataCreated, rnColor, rnNick])
    }

}
