import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from 'components';
import { ShoppingCartComponent } from './widgets/shopping-cart/shopping-cart.component';
import { ProductsSectionComponent } from './widgets/products-section/products-section.component';
import { StorePageComponent } from './pages/store-page/store-page.component';

import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductsSectionComponent,
    StorePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
