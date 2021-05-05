import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  loginUsuario(data: any)
  {
    return this.http.post<any>('EC2Co-EcsEl-E8N091GW896C-825793951.us-east-1.elb.amazonaws.com:3000/login', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  registerUsuario(data: any)
  {
      return this.http.post<any>('EC2Co-EcsEl-E8N091GW896C-825793951.us-east-1.elb.amazonaws.com:3000/register', data, {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}

