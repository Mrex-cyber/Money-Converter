import { Component, OnInit } from '@angular/core';
import { ICurrency } from '../ICurrency';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
  ua: ICurrency = {id: 1, cc: "UAH", rate: 1};

  public firstAmount: number = 0;

  public secondAmount: number = 0;

  public currencies: ICurrency[] = [];

  firstSelected: ICurrency = this.currencies[0];
  secondSelected: ICurrency = this.currencies[1];

  onChangedFirst(amount: number){
    this.secondAmount = amount * this.getConverterCurrency(true);
  }
  onChangedSecond(amount: number){
    this.firstAmount = amount * this.getConverterCurrency(false);
  }

  onSelectFirst(currency: ICurrency): void{
    this.firstSelected = currency;
    this.firstAmount = this.secondAmount / this.secondSelected.rate;
  }
  onSelectSecond(currency: ICurrency): void{
    this.secondSelected = currency;
    this.secondAmount = this.firstAmount / this.firstSelected.rate;
  }

  getCurrencies(): void {
    this.currencyService.getCurrencies().subscribe(currencies => this.currencies = currencies);
  }
  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit():void {
    this.getCurrencies();
  }

  private getConverterCurrency(source: boolean): number {
    let rate = 0;
    if(source) {
       rate = this.firstSelected.rate / this.secondSelected.rate
    } else {
       rate =  this.secondSelected.rate / this.firstSelected.rate
    }
    return rate
  }

}
