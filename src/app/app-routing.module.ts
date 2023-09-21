import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'products',component:ProductsComponent,canActivate:[AuthGuard]},
  {path:'productdetail',component:ProductdetailComponent,canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
