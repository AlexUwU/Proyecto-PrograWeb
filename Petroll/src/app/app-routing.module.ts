import { HomeModule } from './componentes/home/home.module';
import { RegisterModule } from './componentes/register/register.module';
import { LoginModule } from './componentes/login/login.module';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { SolicitudComponent } from './componentes/solicitud/solicitud.component';
import { SolicitudIndividualComponent } from './componentes/ver-solicitud/solicitud-individual.component';
import { SolicitudesComponent } from './componentes/ver-solicitudes/lista-solicitudes.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'CrearSolicitud', component: SolicitudComponent
  },
  {
    path: 'VerSolicitud', component: SolicitudIndividualComponent
  },
  {
    path: 'Solicitudes', component: SolicitudesComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
