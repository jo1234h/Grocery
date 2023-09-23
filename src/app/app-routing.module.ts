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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'products',component:ProductsComponent,canActivate:[AuthGuard]},
  {path:'productdetail',component:ProductdetailComponent,canActivate:[AuthGuard]},
  {path:'subcategory',component:SubcategoryComponent,canActivate:[AuthGuard]},
  { path: 'products/:categoryId', component: ProductsComponent, canActivate: [AuthGuard] },
  {path:'**',redirectTo:'subcategory'},
  {path:'**',redirectTo:'productdetail'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
