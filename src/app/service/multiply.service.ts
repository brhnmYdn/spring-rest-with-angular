import {Injectable, Inject} from '@angular/core';

import { Calculator } from '../model/calculator';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})

export class MultiplyService {

  constructor(private httpClient: HttpClient ){
  }

  calculate(calculator: Calculator){
  }

}
