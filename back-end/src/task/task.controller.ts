import { Controller, Get, Param } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Task } from 'src/interface/task.entity';
import { TaskService } from './task.service';

@Crud({
    model:{
        type : Task
    },  
})

@Controller('tasks')
export class TaskController implements CrudController<Task>{
   constructor(public service: TaskService){}
    @Get()  
    async detailJob(
    ) {
        return await this.service.productDetail();
    }
}
