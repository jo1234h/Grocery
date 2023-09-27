import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { CategoryAddComponent } from './Admin/category-add/category-add.component';
import { CategoryDisplayComponent } from './Admin/category-display/category-display.component';
import { ProductEditComponent } from './Admin/product-edit/product-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin-guard.guard';
import { ToastrModule } from 'ngx-toastr';

export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ProductdetailComponent,
    HomeComponent,
    RegisterComponent,
    SubcategoryComponent,
    CategoryComponent,
    FooterComponent,
    HeaderComponent,
    SearchresultComponent,
    CategoryAddComponent,
    CategoryDisplayComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({}),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [AuthGuard,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
