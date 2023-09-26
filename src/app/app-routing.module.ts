import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth-guard';
import { RegisterComponent } from './register/register.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { ProductEditComponent } from './Admin/product-edit/product-edit.component';
import { CategoryDisplayComponent } from './Admin/category-display/category-display.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'productdetail',component:ProductdetailComponent,canActivate:[AuthGuard]},
  {path:'subcategory/:Id',component:SubcategoryComponent,canActivate:[AuthGuard]},
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  {path: 'search', component: SearchresultComponent, canActivate: [AuthGuard] },
  {path: 'editproducts', component: ProductEditComponent },
  {path: 'editcategory',component:CategoryDisplayComponent},
  {path:'**',redirectTo:'subcategory'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
