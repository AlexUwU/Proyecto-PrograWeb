import { Solicitud } from './../modelos/Solicitud';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  constructor(private backend: BackendService, private router: Router) {}

  solicitudes!: Solicitud[];

  ngOnInit() {
    this.getSolicitudes();
  }

  getSolicitudes() {
    this.backend.getSolicitudes().subscribe((data) => {
      this.solicitudes = data;
      //console.log(this.cookie);
    })
  }

  EliminarSolicitud(id: any) {

    this.backend.EliminarSolicitud({_id:id}).subscribe((data) => {
      alert('Solicitud eliminada correctamente!')
      this.router.navigate(['home']);
    })
  }

  VerSolicitud(id: any) {

    localStorage.setItem('id',id);
    console.log(id)
    this.router.navigate(['VerSolicitud']);
  }

  logout(){
    this.router.navigate(['login']);
  }

  home(){
    this.router.navigate(['home']);
  }

  solicitud(){
    this.router.navigate(['CrearSolicitud']);
  }

}
