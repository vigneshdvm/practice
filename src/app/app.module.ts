import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobilesComponent,
    LaptopsComponent,
    SneakersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
