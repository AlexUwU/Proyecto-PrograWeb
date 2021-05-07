import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private backend: BackendService, private router: Router) {}
  Usuario = new FormControl('', [Validators.required]);
  Contrasena = new FormControl('', [Validators.required, Validators.minLength(3)]);
  ConfirmaContrasena = new FormControl('', [Validators.required, Validators.minLength(3)]);
  getUsuarioErrorMessage()
  {
    if (this.Usuario.hasError('required'))
    {
      return 'Por favor, ingrese un valor';
    }
      return '';
  }

  getContrasenaErrorMessage()
  {
    if (this.Contrasena.hasError('required'))
    {
      return 'Por favor, ingrese un valor';
    }


    return this.Contrasena.hasError('minlength') ? 'Contraseña demasiado corta' : '';
  }
  getConfirmaContrasenaErrorMessage()
  {
    if (this.ConfirmaContrasena.hasError('required'))
    {
      return 'Por favor, ingrese un valor';
    }
    else if (this.Contrasena.value !== this.ConfirmaContrasena.value )
    {
      return 'Los valores no coinciden';
    }
    return this.ConfirmaContrasena.hasError('minlength') ? 'Contraseña demasiado corta' : '';
  }
  ngOnInit() {
  }

  login(){

    this.router.navigate(['login']);

  }

  register()
  {

    if (this.getUsuarioErrorMessage() || this.getContrasenaErrorMessage() || this.getConfirmaContrasenaErrorMessage())
    {
      return;
    }

    let data: any =
    {
      Usuario: this.Usuario.value,
      Contrasena: this.Contrasena.value
    }

    let response = this.backend.registerUsuario(data);

    response.subscribe((res: any) =>
    {
      console.log(res)
      this.router.navigate(['login']);
    });
  }
}
