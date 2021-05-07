import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';
import { Solicitud } from './../modelos/Solicitud';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud-individual.component.html',
  styleUrls: ['./solicitud-individual.component.css']
})
export class SolicitudIndividualComponent implements OnInit {

  constructor(private backend: BackendService, private router: Router) {}

  solicitud !: Solicitud

  ngOnInit() {

    this.getSolicitud();
  }

  getSolicitud() {

    let id = localStorage.getItem('id')
    this.backend.getSolicitud({_id:id}).subscribe((data) => {
      this.solicitud = data;
    })
  }

  Aceptar() {

    let id = localStorage.getItem('id')
    this.backend.AceptarSolicitud({_id:id}).subscribe((data) => {
      alert(data.mensaje)
      this.router.navigate(['Solicitudes']);
    })
  }

  Rechazar() {

    let id = localStorage.getItem('id')
    this.backend.RechazarSolicitud({_id:id}).subscribe((data) => {
      alert(data.mensaje)
      this.router.navigate(['Solicitudes']);
    })
  }

  logout(){
    this.router.navigate(['login']);
  }

  home(){
    this.router.navigate(['home']);
  }

  solicitudes(){
    this.router.navigate(['Solicitudes']);
  }
}
