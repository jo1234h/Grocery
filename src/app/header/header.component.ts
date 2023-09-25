import { Component } from '@angular/core';
import { ApiServicesService } from '../Shared/api-services.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name: string = '';
  price: number;
  constructor(public serv :ApiServicesService ) {}

  search() {
    this.serv.GetProductByNamePrice(this.name, this.price);
}
}
