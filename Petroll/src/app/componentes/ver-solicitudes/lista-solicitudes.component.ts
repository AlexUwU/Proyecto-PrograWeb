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

  ngOnInit() {
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
