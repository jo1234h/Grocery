import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/Shared/api-services.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit{
  constructor(public serv:ApiServicesService){ }
  ngOnInit(): void {
   
    
  }

}
