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

  allClear() {
    this.currentNum = 0;
    this.operation = '';
    this.result = 0;
  }

  setCurrentNum(val: string) {
    this.currentNum = Number.parseFloat(val);
  }

  getCurrentNum(): number {
    return this.currentNum;
  }

  /*toggleSign(val: string): number {
    this.currentNum = Number.parseFloat(val);
    if (this.currentNum !== 0) {
      this.currentNum *= -1;
    }
    return this.currentNum;
  }*/

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
      //console.log(this.operation + ' ' + this.currentNum);
      this.currentNum = 0;
      //console.log(this.result.toString() + ' | ' + this.result);
    }
    return this.result;
  }

  finishOperation(val: string): string {
    this.operation = val;
    return this.operation;
  }

  finishAll(): string {
    this.operation = '';
    return '=';
  }

}
