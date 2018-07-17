import { Injectable } from '@angular/core';
import { NUMBER_FORMAT_REGEXP } from '@angular/common/src/i18n/format_number';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  currentNum: number = 0;
  operation: string = '';
  result: number = 0;

  constructor() { }

  /*countDecimals(a: number): number {
    if (Math.floor(a) === a) return 0;
    return a.toString().split('.')[1].length || 0;
  }

  getLongestDecimals(a:number, b: number): number {
    return (this.countDecimals(a) > this.countDecimals(b)) ? this.countDecimals(a) : this.countDecimals(b);
  }

  add(a: number, b: number): number {
    //return Number.parseFloat((a + b).toFixed(this.getLongestDecimals(a, b)));
    return a + b;  
  }
  
  substract(a: number, b: number): number {
    //return Number.parseFloat((a - b).toFixed(this.getLongestDecimals(a, b)));
    return a - b;  
  }

  multiply(a: number, b: number) {
    return a * b;  
  }

  divide(a: number, b: number) {
    return a / b;  
  }*/

  allClear() {
    this.currentNum = 0;
    this.operation = '';
    this.result = 0;
  }

  setCurrentNum(val: string) {
    this.currentNum = Number.parseFloat(val.replace(/,/g , ''));
  }

  getCurrentNum(): number {
    return this.currentNum;
  }

  toggleSign(val: string): number {
    this.currentNum = Number.parseFloat(val.replace(/,/g , ''));
    if (this.currentNum !== 0) {
      this.currentNum *= -1;
    }
    return this.currentNum;
  }

  calculate(isLastInputOperator: boolean): number {
    if (!isLastInputOperator) {
      let a: number = this.result;
      let b: number = this.currentNum;
      switch (this.operation) {
        case '+':
          this.result = a + b;
          break;
        case '-':
          this.result = a - b;
          break;
        case '*':
          this.result = a * b;
          break;
        case '/':
          this.result = a / b;
          break;
        default:
          this.result = this.currentNum;
      }
      //this.result = Number.parseFloat(this.result.toPrecision(12));
      //console.log(this.operation + ' ' + this.currentNum);
      this.currentNum = 0;
      //console.log(this.result.toString() + ' | ' + this.result);
    }
    return this.result;
  }

  finishOperation(val: string): string {
    //let lastOperation = this.operation;
    this.operation = val;
    return this.operation;
  }

  finishAll(): string {
    this.operation = '';
    return '=';
  }

}
