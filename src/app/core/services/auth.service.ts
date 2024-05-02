import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/loginRequest';
import { RegisterRequest } from '../models/registerRequest';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>("https://spring-boot-catmash.fly.dev/auth/authenticate", { email, password });
  }

  register(firstname: string, lastname: string, email: string, password: string) {
    return this.http.post<RegisterRequest>("https://spring-boot-catmash.fly.dev/auth/register", { firstname, lastname, email, password }); 
  }
}
