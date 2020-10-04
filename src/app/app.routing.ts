import { RouterModule } from '@angular/router';
import{ProductComponent} from './product/product.component';
import{AdvertisementComponent} from './advertisement/advertisement.component';


export const routing = RouterModule.forRoot([
  {path: 'product', component: ProductComponent},
  {path: 'advertisement', component: AdvertisementComponent}
]);