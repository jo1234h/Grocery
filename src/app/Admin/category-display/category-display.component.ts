import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/Shared/api-services.service';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css']
})
export class CategoryDisplayComponent implements OnInit {
  constructor(public serv:ApiServicesService){ }
  ngOnInit(): void {
    this.serv.categoryList;
    
  }
  

}
