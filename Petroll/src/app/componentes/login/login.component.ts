import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private backend: BackendService, private router: Router) { }
  Usuario = new FormControl('', [Validators.required]);
  errorLogin ="";
  Contrasena = new FormControl('', [Validators.required, Validators.minLength(3)]);

  register(){

    this.router.navigate(['register']);

  }

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
  ngOnInit() {
  }



  login()
  {

    if (this.getUsuarioErrorMessage() || this.getContrasenaErrorMessage())
    {
      return;
    }

    let data: any =
    {
      Usuario: this.Usuario.value,
      Contrasena: this.Contrasena.value
    }
      console.log(data);

    let response = this.backend.loginUsuario(data);

    response.subscribe((res: any) =>
    {
      console.log(res)
      if(res.estado === "FALLIDO" )
      {
        this.errorLogin = res.mensaje;
      }
      else if(res.estado === "EXITOSO")
      {
        this.router.navigate(['home']);
      }
    });
  }
}
