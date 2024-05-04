import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getCats() {
    return this.http.get<Cat[]>("https://spring-boot-catmash.fly.dev/cats")
  }

  incrementVote(catId: number) {
    return this.http.patch<Cat>(`https://spring-boot-catmash.fly.dev/cats/${catId}/vote`, {});
  }

}
