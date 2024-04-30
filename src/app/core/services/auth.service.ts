import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/loginRequest';
import { RegisterRequest } from '../models/registerRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<LoginRequest>("https://spring-boot-algo-plus.fly.dev/auth/authenticate", { email, password });
  }

  register(firstname: string, lastname: string, email: string, password: string) {
    return this.http.post<RegisterRequest>("https://spring-boot-algo-plus.fly.dev/auth/register", { firstname, lastname, email, password }); 
  }
}
