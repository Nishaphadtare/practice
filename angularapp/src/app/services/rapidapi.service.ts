import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url= 'https://bb-finance.p.rapidapi.com/market/auto-complete?query=mango';

  constructor(private httpClient: HttpClient) { }
  getDataBBFinance() //:Observable<any>
  {
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': 'cd19e83f6fmshba7d92ee89e2197p167e1djsna6f86522614b' 
  
    })

     return this.httpClient.get(this.url, {headers: headers})
  }
}
