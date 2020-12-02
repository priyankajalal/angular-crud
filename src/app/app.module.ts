import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudOperationsComponent } from './shared/crud-operations/crud-operations.component';
import { CategoriesComponent } from './shared/categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './shared/products/products.component';
import { HeaderComponent } from './header/header.component';
import { GroceryComponent } from './grocery/grocery.component';
import { GroceryItemComponent } from './grocery-item/grocery-item.component';
import { CartComponent } from './cart/cart.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {path:'categories', component: CategoriesComponent},
  {path:'products', component: ProductsComponent},
  {path:'crud', component: CrudOperationsComponent},
  // {path:'grocery', component: GroceryComponent},
  {path:'shoppingCart', component: ShoppingCartComponent},
  {path:'checkout', component: CheckoutComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    CrudOperationsComponent,
    CategoriesComponent,
    ProductsComponent,
    HeaderComponent,
    GroceryComponent,
    GroceryItemComponent,
    CartComponent,
    ShoppingCartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
