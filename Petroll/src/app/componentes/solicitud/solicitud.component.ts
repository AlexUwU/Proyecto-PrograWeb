import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor(private backend: BackendService, private router: Router) {}

  ngOnInit() {
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
