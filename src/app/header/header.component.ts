import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { ICurrency } from '../ICurrency';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allCurrencies : ICurrency[] = [];

  currencies : ICurrency[] = [];

  getCurrencies(): void {
    this.currencyService.getCurrencies().subscribe(currencies => this.currencies = currencies.filter((cur) => {
      return cur.cc === 'USD' || cur.cc === 'EUR'
    }));


  }
  constructor(private currencyService: CurrencyService) {

  }

  ngOnInit():void {
    this.getCurrencies();
  }


}
