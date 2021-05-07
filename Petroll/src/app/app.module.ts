import { SolicitudIndividualComponent } from './componentes/ver-solicitud/solicitud-individual.component';
import { SolicitudComponent } from './componentes/solicitud/solicitud.component';
import { SolicitudesComponent } from './componentes/ver-solicitudes/lista-solicitudes.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SolicitudesComponent,
    SolicitudComponent,
    SolicitudIndividualComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
