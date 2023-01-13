import { Controller, Get, Param } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Shop } from 'src/interface/shop.entity';
import { User } from 'src/interface/user.entity';
import { UserService } from './user.service';
@Crud({
    model:{
        type : User
    }
})
@Controller('users')
export class UserController implements CrudController<User>  {
    constructor(public service: UserService) { }
}

