import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../Shared/api-services.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit 
{
  name: string = '';
  searchForm: any;

  constructor(private formbulider: FormBuilder, private router: Router) { }

  ngOnInit() 
  {
    this.searchForm = this.formbulider.group
    ({
      productName: ['', [Validators.required]],
      price: []
    });
  }

  onFormSubmit() 
  {
    const searchData = this.searchForm.value;
    this.router.navigate(['search/', { productName: searchData.productName, price: searchData.price }]);
  }
}
