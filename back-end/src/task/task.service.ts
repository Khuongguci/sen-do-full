import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Shop } from 'src/interface/shop.entity';
import { Task } from 'src/interface/task.entity';
import { User } from 'src/interface/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService extends TypeOrmCrudService<Task>{
    constructor(
        @InjectRepository(Task)
        private repository : Repository<Task>,
        @InjectRepository(User)
        private repositoryUser : Repository<User>,
        @InjectRepository(Shop)
        private repositoryShop: Repository<Shop>
        
        ) {
        super(repository);
    }
    async productDetail() {
        const data = await this.repository.find();
        return data;
    }
}
