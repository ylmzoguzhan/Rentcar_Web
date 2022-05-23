import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { AnasayfaComponent } from './ui/anasayfa/anasayfa.component';

import { HomeComponent } from './ui/components/home/home.component';



const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: 
      [
        { path: "", component: DashboardComponent },
        { path: "rents", loadChildren: () => import("./admin/components/rents/rents.module").then(module => module.RentsModule) },
        {path:"cars", loadChildren: ()=> import("./admin/components/cars/cars.module").then(module=>module.CarsModule)},
        {path:"users", loadChildren: ()=> import("./admin/components/users/users.module").then(module=>module.UsersModule)},
        {path:"cardetails", loadChildren: ()=> import("./admin/components/cardetails/cardetails.module").then(module=>module.CardetailsModule)},
      ]
  },
   
    {
      path:"", component:AnasayfaComponent, children:[
        {path:"", component:HomeComponent},
        {path:"profile",loadChildren:()=>import("./ui/components/profile/profile.module").then(module=>module.ProfileModule)},
        {path:"cars",loadChildren:()=>import("./ui/components/cars/cars.module").then(module=>module.CarsModule)},
        {path:"login",loadChildren:()=>import("./ui/components/login/login.module").then(module=>module.LoginModule)},
        {path:"register",loadChildren:()=>import("./ui/components/register/register.module").then(module=>module.RegisterModule)},
      ]
    }
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
