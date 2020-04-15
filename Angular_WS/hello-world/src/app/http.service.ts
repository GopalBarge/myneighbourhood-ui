import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod(){
    return console.log('Hey whats up!!!');
  }
  getWine(){
    return this.http.get('http://api.openbrewerydb.org/breweries')
  }

}
