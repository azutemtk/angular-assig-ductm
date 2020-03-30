import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { MenubarComponent } from './menubar/menubar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListProductComponent,
    FooterComponent,
    HeaderComponent,
    ProductManagerComponent,
    HomeComponent,
    ManagerComponent,
    PageNotfoundComponent,
    MenubarComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
