import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError,Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
  }

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

