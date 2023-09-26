import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticatedResponse } from '../models/authenticated-response';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Register } from '../models/register.model';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { OrderSummary } from '../models/order-summary';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  private readonly apiURL = 'http://localhost:5092/api/';
  token: string;
  header: any;
  public categoryList: Category[];
  
  public allCategory:Category[];
  public Cdata: Category = { Id: 0, CategoryName: '' };


  public productList: Product[];
  public allProducts: Product[];
  public pro: Product;
  public productbynameandprice :Product[];

  public singleData:Product=new Product();

  public orderedProducts:OrderSummary[]=[];


  constructor(private http: HttpClient, private jwt: JwtHelperService) {
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }
 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //for login
  authenticateLogin(cred: Credential): Observable<any>{
    return this.http.post<AuthenticatedResponse>(this.apiURL + 'auth/login', cred, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }

  //for checking the token
  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("SecurityToken");
    if (token && !this.jwt.isTokenExpired(token)) {
      return true;
    }
    return false;
  };
  //for creating users
  CreateUser(register: Register) {
    console.log("Success!");
    return this.http.post<Register>(this.apiURL + 'auth/register', register, this.httpOptions);
  }

  //for geting product categories
  GetProductCategories() {
      this.http.get<Category[]>(this.apiURL + 'Categories').subscribe(data => {
      this.categoryList = data;
    });
  }

  //for getting different products according to the category
  GetProductByCategory(categoryId: number) {
    this.http.get<Product[]>(this.apiURL + 'Products/Search/' + categoryId).subscribe(data => {
      this.productList = data;
    });
  }

  
  //for getting different products according to the name and price
  GetProductByNamePrice(name: string, categoryId: number){
    this.http.get<Product[]>(this.apiURL+'Products/Search/'+name+'/' +categoryId).subscribe(data => {
      this.productbynameandprice=data;
    });
  }

  //for getting all products
  GetAllProducts()
  {
    this.http.get<Product[]>(this.apiURL+'Products').subscribe(data=>
    {
        this.allProducts=data;
    })
  }

  //for adding category
  AddCategory(category:Category){
    return this.http.post<Category>(this.apiURL+'Categories',category,this.httpOptions);
  }

 

  //for adding products
  AddProducts(product:Product){
    return this.http.post<Product>(this.apiURL+'Products',product,this.httpOptions);
  }

  //for updating products
  EditProducts(product:Product){
    return this.http.put<Product>(this.apiURL+'Products/'+product.Id,product,this.httpOptions);
  }

  //get product by id
  GetProductById(id:number){
    this.http.get<Product>(this.apiURL+'Products/'+id).subscribe(data=>{
      this.pro=data;
    })
  }
  //for getting all category
  GetAllCategory()
  {
    this.http.get<Category[]>(this.apiURL+'Categories').subscribe(data=>
    {
        this.allCategory=data;
    })
  }

  //for delete category
  deleteCategory(id: number) {
    return this.http.delete<Category>(this.apiURL+'Categories/'+id);

  }
//for edit category
  EditCategory(category:Category){
    return this.http.put<Category>(this.apiURL+'Categories/'+category.Id,category,this.httpOptions);
  }
  deleteProduct(id:number){
    return this.http.delete<Product>(this.apiURL+'Products/'+id);
  }


}

