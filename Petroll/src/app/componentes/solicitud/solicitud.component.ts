import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup,FormBuilder } from '@angular/forms';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {


  form_nueva: FormGroup;


  constructor(private fb: FormBuilder,private backend: BackendService, private router: Router) {


    this.form_nueva = this.fb.group({
      titulo: ['', [
        Validators.required
      ]],
      descripcion: ['', [
        Validators.required
      ]]
    })

  }

  ngOnInit() {
  }

  IniciarSolicitud(){

    this.backend.crearSolicitud(this.form_nueva.value).subscribe((data) => {

      this.router.navigate(['Solicitudes']);
      return;

    },
      (error: any) => {

        alert('Ha ocurrido un error al iniciar la solicitud!')
        return;
      });
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
