import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpRequest } from '@angular/common/http';
import { ICurrency } from './ICurrency';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currencyUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';

  httpOptions = {
     headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
     };

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<ICurrency[]> {
    return this.http.get<ICurrency[]>(this.currencyUrl);
  }



}
