import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {
    private currencyListKey: any;
    private currencyListValues: any;
    private convertRes;

    constructor(private exchangeService: ExchangeService) { }

    ngOnInit() {
        this.exchangeService.getExchangeCurrencie().then(
            (list: any) => {
                this.currencyListKey    = Object.keys(list["rates"]);
                this.currencyListValues = Object.values(list["rates"])         
            }
        );
    }
    convert(form: NgForm){
        let i = form.value.currency
        let cValue = this.currencyListValues[i];
        let res = form.value.amount *cValue;
        if(!isNaN(res)){
            this.convertRes = res;
        }else{
            this.convertRes = 0;
        }
    }

    onSubmit(form: NgForm){
        let i = form.value.currency
        let cValue = this.currencyListValues[i];
        let res = form.value.amount *cValue;
        if(!isNaN(res)){
            this.convertRes = res;
        }else{
            this.convertRes = 0;
        }
    }
}
