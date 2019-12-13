import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  //method to call the api
  getPlanets() {
      const o1 = this.httpSvc.get('https://swapi.co/api/planets/');

      return o1;
  }
}
