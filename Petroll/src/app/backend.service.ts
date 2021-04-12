import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  loginUsuario(data: any)
  {
    return this.http.post<any>('http://localhost:400/login', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  registerUsuario(data: any)
  {
      return this.http.post<any>('http://localhost:400/register', data, {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}

