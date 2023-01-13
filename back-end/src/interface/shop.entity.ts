import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./task.entity";

@Entity()
export class Shop{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    status:string;
    @Column()
    ware_house_region_name:string;

    @Column({nullable:true})
    star?:string;

    @Column({nullable:true})
    text?:string;

    @Column({nullable:true})
    text_color?:string;

    @OneToMany(() => Task, (Task) => Task.Shop, {eager: false})
    Task : Task[];
}