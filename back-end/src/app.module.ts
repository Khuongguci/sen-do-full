import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './interface/task.entity';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { ShopModule } from './shop/shop.module';
import { User } from './interface/user.entity';
import { Shop } from './interface/shop.entity';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '09072001',
    database: 'product',
    entities: [Task, User, Shop],
    synchronize: true,
  }), TaskModule, UserModule, ShopModule],
})
export class AppModule { }
