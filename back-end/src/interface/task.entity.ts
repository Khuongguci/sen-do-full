import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Shop } from "./shop.entity";

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category_path:string;

    @Column()
    image:string;

    @Column()
    default_price_min:string;

    @Column()
    default_price_max:string;

    @Column()
    sale_price_min:string;

    @Column()
    sale_price_max:string;

    @Column({nullable:true})
    sale_percent?:string;

    @Column({nullable:true})
    sold?:string;

    @Column()
    seller_admin_id: number;

    @Column({nullable:true})
    sku_user?:string;

    @Column()
    product_type:string;

    @Column({nullable:true})
    active_event_frame?:string;

    @Column()
    status_new:string;

    @Column()
    search_feed_type:string;

    @ManyToOne(() => Shop, (Shop) => Shop.Task, { eager: true })
    @JoinColumn({name:"Shop_id"})
    Shop: Shop[];
}