import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  loginUsuario(data: any)
  {
    return this.http.post('EC2Co-EcsEl-E8N091GW896C-825793951.us-east-1.elb.amazonaws.com:3000/petroll/login', data).pipe(catchError(this.clientError));
  }
  registerUsuario(data: any)
  {
      return this.http.post('EC2Co-EcsEl-E8N091GW896C-825793951.us-east-1.elb.amazonaws.com:3000/petroll/register', data).pipe(catchError(this.clientError));
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

