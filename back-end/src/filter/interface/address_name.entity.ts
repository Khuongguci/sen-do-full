import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class address_name{
        @PrimaryColumn()
        id:number;

        @Column()
        attribute_term:string;

        @Column()
        attribute_name:string;

        @Column()
        attribute_key:string;
        
}