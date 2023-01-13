import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Shop } from 'src/interface/shop.entity';
import { ShopService } from './shop.service';

@Crud({
    model:{
        type : Shop
    }
})
@Controller('shops')
export class ShopController implements CrudController<Shop> {
    constructor(public service: ShopService){}
}
