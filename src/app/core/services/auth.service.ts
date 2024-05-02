import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/loginResponse';
import { RegisterResponse } from '../models/registerResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>("https://spring-boot-catmash.fly.dev/auth/authenticate", { email, password });
  }

  register(firstname: string, lastname: string, email: string, password: string) : Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>("https://spring-boot-catmash.fly.dev/auth/register", { firstname, lastname, email, password }); 
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
