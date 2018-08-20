import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { CartComponent } from './modules/home/pages/cart/cart.component';
import { InicioComponent } from './modules/home/pages/inicio/inicio.component';
import { CheckoutComponent } from './modules/home/pages/checkout/checkout.component';
import { ProductCategoryComponent } from './modules/home/pages/product-category/product-category.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThanksComponent } from './modules/home/pages/thanks/thanks.component';

const appRoutes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'shirts', component: ProductCategoryComponent},
  { path: 'pants', component: ProductCategoryComponent},
  { path: 'jackets', component: ProductCategoryComponent},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'thanks', component: ThanksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    InicioComponent,
    CheckoutComponent,
    ProductCategoryComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    UiModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
