import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { BurgerShopComponent } from './components/burger-shop/burger-shop.component';
import { BurgerShoppingCartComponent } from './components/burger-shop/burger-shopping-cart/burger-shopping-cart.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectContainComponent } from './components/project-contain/project-contain.component';
import { LoginComponent } from './components/login/login.component';

import { BurgerService } from 'src/app/services/burger.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResumeComponent,
    BurgerShopComponent,
    ProjectContainComponent,
    BurgerShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [BurgerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
