import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entiie';

@Injectable()
export class UsersService {
    private users:User[] = [{id:0,name:"Akbar"},{id:1,name:"Akbar"},{id:2,name:"Akbar"},{id:3,name:"Hasan"}];
    findAll(name?:string):User[]{
        console.log("Here is==========");
        if(name){
            console.log("Ok here");
            
            return this.users.filter(user => user.name === name);
        }
       
        
        return this.users;
    }
    findById(userId:number):User{
        return this.users.find(user => user.id === userId);
    }
    creatUser(CreateUserDto:CreateUserDto):User{
        const newUser = {id:Date.now(),...CreateUserDto};
        this.users.push(newUser);
        return newUser;
    }
}
   