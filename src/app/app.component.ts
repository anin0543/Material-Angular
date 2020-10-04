import { Component } from '@angular/core';
import { AdvertisementService } from './advertisement.service';
import { ProductService } from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService,AdvertisementService]
  
})
export class AppComponent {
  title = 'Material Design';
}
