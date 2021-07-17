import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { CarComponent } from './car/car.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductWithOutDiscountComponent } from './product-with-out-discount/product-with-out-discount.component';

const routes: Routes = [
  {path:"home" , component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'Products', component: ProductsComponent,
    children: [
      { path: 'with-discount', component: ProductWithDiscountComponent },
      { path: 'without-discount', component:ProductWithOutDiscountComponent }
    ]
  },
  {path:"Products" , component:ProductsComponent},
  {path:"users" , component:UsersComponent},
  {path:"posts" , component:PostsComponent},
  {path:"cars" , component:CarComponent},
  {path:"posts/:id" , component:PostCommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
