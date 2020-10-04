import { Component } from "@angular/core";
import { AdvertisementService } from '../advertisement.service';

@Component({
  selector: "advertisement",
  templateUrl: './advertisement.component.html',
  styleUrls: ["./advertisement.component.css"],
})
export class AdvertisementComponent {
  advertisements;
  constructor(advertisementService: AdvertisementService) {
    this.advertisements = advertisementService.getAdvertisements();
  }
}
