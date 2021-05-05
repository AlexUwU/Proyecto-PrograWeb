import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  loginUsuario(data: any)
  {
    return this.http.post<any>('EC2Co-EcsEl-1VQV40H4BCES4-551203416.us-east-1.elb.amazonaws.com:4000/login', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  registerUsuario(data: any)
  {
      return this.http.post<any>('EC2Co-EcsEl-1VQV40H4BCES4-551203416.us-east-1.elb.amazonaws.com:4000/register', data, {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}

