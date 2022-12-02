import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';
import { GlassesComponent } from './pages/glasses/glasses.component';
import { FashionComponent } from './fashion/fashion.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { CamerasComponent } from './cameras/cameras.component';
import { AppliancesComponent } from './appliances/appliances.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobilesComponent,
    LaptopsComponent,
    SneakersComponent,
    GlassesComponent,
    FashionComponent,
    KitchenComponent,
    FurnitureComponent,
    GroceriesComponent,
    CamerasComponent,
    AppliancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
