import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {CalculatorService} from '../service/calculator.service';
import {Calculator} from '../model/calculator';
import {FormControl} from '@angular/forms';
import {from} from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor(private calculatorService: CalculatorService) {
  }


  calculator: Calculator = new Calculator();

  calculateNumber: string;
  result;
  ngOnInit(): void {
    this.calculateNumber = '';
    this.calculator.numberOne = '';
    this.calculator.numberTwo = '';
    this.calculator.operation = '';

  }

  addNumberToInput(nmber: string) {
    this.calculateNumber += nmber;
    console.log(this.calculateNumber);
  }

  clear() {
    this.calculator = new Calculator();
    this.calculateNumber = '';
    this.calculator.numberOne = '';
    this.calculator.numberTwo = '';
    this.calculator.operation = '';
    this.result = '';
  }
  setOperation(operation: string){
    this.calculator.operation = operation;
    console.log(this.calculator.operation);
    if (this.calculator.numberOne === '') {
      this.addNumberOne();
    } else {
      if (this.calculator.numberTwo === '') {
        this.addNumberTwo();
      }
    }
    console.log(this.calculator);
  }
  addNumberOne() {
    console.log('asdas');
    this.calculator.numberOne = this.calculateNumber;
    this.calculateNumber = '';
  }

  addNumberTwo() {
    console.log('number twp');
    this.calculator.numberTwo = this.calculateNumber;
  }

  calculate() {
    if (this.calculator.numberTwo === ''){
      this.addNumberTwo();
    }
    console.log(this.calculator);
    if (this.calculator.numberOne !== '' && this.calculator.numberTwo !== '') {
      this.calculateNumber = '';
      this.calculatorService.calculate(this.calculator).subscribe(data => {
        this.calculator = data;
        this.result = data.result;
        this.calculator.numberOne = data.result;
        this.calculator.numberTwo = '';
        console.log(this.calculator);
      });
    }
  }
}
