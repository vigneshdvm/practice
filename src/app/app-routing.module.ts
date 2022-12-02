import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
