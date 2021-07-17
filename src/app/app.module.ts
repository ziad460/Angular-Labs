import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { BehaviourServiceDemoComponent } from './behaviour-service-demo/behaviour-service-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { CarComponent } from './car/car.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductWithOutDiscountComponent } from './product-with-out-discount/product-with-out-discount.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    BehaviourServiceDemoComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    PostCommentsComponent,
    CarComponent,
    RegisterComponent,
    LoginComponent,
    ProductWithDiscountComponent,
    ProductWithOutDiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
