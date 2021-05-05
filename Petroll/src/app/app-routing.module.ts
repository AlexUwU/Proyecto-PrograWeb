import { HomeModule } from './componentes/home/home.module';
import { RegisterModule } from './componentes/register/register.module';
import { LoginModule } from './componentes/login/login.module';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{
   path: '', component:LoginComponent
},
{
  path: 'register', component:RegisterComponent
},
{
  path: 'login', component:LoginComponent
},
{
  path: 'home', component:HomeComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
