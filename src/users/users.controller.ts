import {Body, Controller, Get, Post} from "@nestjs/common";
import {usersInterface} from "./users.interface";
import {usersService} from "./users.service";


@Controller('/user')
export class UserController{

    constructor(private userService:usersService,public token) {
    }
    // @Get('deneme')
    // deneme(){
    //     return this.userService.deneme()
    // }

    @Get('login')
    login(@Body() login:usersInterface){
        let pass
        let al= this.userService.loginService(login.username).then(value => {
            pass=value[1]
            this.token=value[0]
            console.log("token",value[0],"password",pass)
        })
        if (pass != login.password){
            console.log("password is wrong!!!")
            return "password is wrong!!!"
        }
        return login.username
    }

    @Post('post')
    signup(@Body() intface:usersInterface){
        this.userService.singupService(intface.username,intface.password).then(value=>{
            console.log("user is created")
        })
        return intface.username + intface.password
    }
}