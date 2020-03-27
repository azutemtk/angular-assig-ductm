import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductmanagerComponent } from './productmanager/productmanager.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    FooterComponent,
    HeaderComponent,
    ProductManagerComponent,
    ProductmanagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
