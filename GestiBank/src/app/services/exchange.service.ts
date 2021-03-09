import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
    private exchangeSubject = new Subject<any>();
    private exchangeList: any[] = [];
    API_URL = "https://api.exchangeratesapi.io/latest";
    
    constructor(private httpClient: HttpClient) { }

    getExchangeCurrencie(){
        return new Promise(
            (resolve, reject) => {
                this.httpClient.get<any>(this.API_URL).toPromise().then(
                    (data) => {
                        resolve(data.valueOf());                        
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

}
