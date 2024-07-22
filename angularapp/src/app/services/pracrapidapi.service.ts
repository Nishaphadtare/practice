import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracrapidapiService {

URL = 'https://bb-finance.p.rapidapi.com/market/get-full?id=adsmi:ind,aex:ind,co1:com,gc1:com';
  
  constructor(private httpClient: HttpClient) { }

  getMarkeFullData(){
     
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': 'c1a96d0bfdmshb381d601f01709cp1756f7jsn21b497295676',
    })
   return this.httpClient.get(this.URL, {headers: headers});
  }
}
