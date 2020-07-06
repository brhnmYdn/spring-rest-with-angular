import {Injectable, Inject} from '@angular/core';

import { Calculator } from '../model/calculator';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class CalculatorService {

  restUrl = 'http://localhost:8080/api/calculate';
   emp: Calculator = new Calculator();

  constructor(private httpClient: HttpClient ){
  }

  calculate(calculator: Calculator): Observable<Calculator>{
    return this.httpClient.post<Calculator>(this.restUrl, calculator);
  }
}
