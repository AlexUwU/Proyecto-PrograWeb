import { jws } from './componentes/modelos/jwt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError,Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient,private router: Router) {
  }

  decoded!:jws;

  loginUsuario(data: any)
  {
      return this.http.post(`${environment.server}/petroll/login`, data).pipe(catchError(this.clientError));
  }
  registerUsuario(data: any)
  {
      return this.http.post(`${environment.server}/petroll/register`, data).pipe(catchError(this.clientError));
  }

  crearSolicitud(data: any)
  {
      return this.http.post(`${environment.server}/petroll/crearsolicitud`, data).pipe(catchError(this.clientError));
  }

  getSolicitudes(): Observable<any> {
    return this.http.get(`${environment.server}/petroll/getsolicitudes`).pipe(catchError(this.clientError));
  }

  getSolicitud(data: any):Observable<any>
  {
      return this.http.post(`${environment.server}/petroll/getsolicitud`, data).pipe(catchError(this.clientError));
  }

  EliminarSolicitud(data: any)
  {
      return this.http.post(`${environment.server}/petroll/deletesolicitud`, data).pipe(catchError(this.clientError));
  }

  AceptarSolicitud(data: any):Observable<any>
  {
      return this.http.post(`${environment.server}/petroll/aceptarsolicitud`, data).pipe(catchError(this.clientError));
  }

  RechazarSolicitud(data: any):Observable<any>
  {
      return this.http.post(`${environment.server}/petroll/rechazarsolicitud`, data).pipe(catchError(this.clientError));
  }

  revisarJWS() : boolean{

    var token = sessionStorage.getItem('token');

    if(token)
    {
      this.decoded = jwt_decode(token);


      if(this.decoded.exp == undefined){
          return false;
      }

      const date = new Date(0);

      let tokenExpDate = date.setUTCMilliseconds(Number(this.decoded.exp));

      if(tokenExpDate.valueOf() > new Date().valueOf()){
          this.router.navigate(['/login']);
          return true;
      }
      return false;
    }

    return false;
  }

  clientError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }

}

