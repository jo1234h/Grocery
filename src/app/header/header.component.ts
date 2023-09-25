import { Component } from '@angular/core';
import { ApiServicesService } from '../Shared/api-services.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name: string = '';
  price: number;
  constructor(private router: Router,public serv :ApiServicesService) {}

  search() {
    this.router.navigate(['products/',{productName:this.name,price:this.price}]);
}
}
