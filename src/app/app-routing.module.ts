import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliancesComponent } from './appliances/appliances.component';
import { CamerasComponent } from './cameras/cameras.component';
import { FashionComponent } from './fashion/fashion.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { GlassesComponent } from './pages/glasses/glasses.component';
import { HomeComponent } from './pages/home/home.component';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"mobiles",component:MobilesComponent},
  {path:"laptops",component:LaptopsComponent},
  {path:"sneakers",component:SneakersComponent},
  {path:"glasses",component:GlassesComponent},
  {path:"fashion",component:FashionComponent},
  {path:"kitchen",component:KitchenComponent},
  {path:"furniture",component:FurnitureComponent},
  {path:"groceries",component:GroceriesComponent},
  {path:"cameras",component:CamerasComponent},
  {path:"appliances",component: AppliancesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
