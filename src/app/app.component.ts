import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator App';
  num1: number;
  num2: number;

  currentNum: number = 0;
  currentInput: string = '0';
  operation: string = '';
  result: number = 0;
  log: string = '';
  isLastInputOperation: boolean = false;

  countDecimals(a: number): number {
    if (Math.floor(a) === a) return 0;
    return a.toString().split('.')[1].length || 0;
  }
  getLongestDecimals(a:number, b: number): number {
    return (this.countDecimals(a) > this.countDecimals(b)) ? this.countDecimals(a) : this.countDecimals(b);
  }
  add() {
    this.result = Number.parseFloat((this.num1 + this.num2).toFixed(this.getLongestDecimals(this.num1, this.num2)));
  }
  substract() {
    this.result = Number.parseFloat((this.num1 - this.num2).toFixed(this.getLongestDecimals(this.num1, this.num2)));
  }
  multiply() {
    this.result = this.num1 * this.num2;  
  }
  divide() {
    this.result = this.num1 / this.num2;  
  }

  allClear() {
    this.currentNum = 0;
    this.currentInput = '0';
    this.operation = '';
    this.result = 0;
    this.log = '';
    this.isLastInputOperation = false;
  }
  insertDot() {
    this.currentInput = this.currentNum.toString();
    if (this.currentInput.indexOf('.') === -1) {
      this.currentInput += '.';
    }
    this.isLastInputOperation = false;
  }
  getInput(event: any) {
    //console.log(isNaN(event.target.value)+' '+Number.isNaN(event.target.value));
    if (this.currentNum !== 0 || (Number.parseFloat(this.currentInput) === 0 && this.currentInput.indexOf('.') !== -1)) {
      this.currentInput += event.target.value;
    } else {
      this.currentInput = event.target.value;
    }
    this.currentNum = Number.parseFloat(this.currentInput);
    //console.log(this.currentInput+' '+this.currentNum);
    this.isLastInputOperation = false;
  }
  clearInput() {
    if (!this.isLastInputOperation) {
      this.currentInput = (this.currentInput.length > 1) ? this.currentInput.slice(0, -1) : '0';
      this.currentNum = Number.parseFloat(this.currentInput);
    }
  }
  toggleSign() {
    if (this.currentNum !== 0) {
      this.currentNum *= -1;
      this.currentInput = this.currentNum.toString();
    }
  }
  calculate() {
    if (!this.isLastInputOperation) {
      this.num1 = this.result;
      this.num2 = this.currentNum;
      switch (this.operation) {
        case '+':
          this.add();
          break;
        case '-':
          this.substract();
          break;
        case 'X':
          this.multiply();
          break;
        case '/':
          this.divide();
          break;
        default:
          this.result = Number.parseFloat(this.currentInput);
      }
      let result = Number.parseFloat(this.result.toPrecision(12));
      //this.currentInput = (Number.isInteger(this.result)) ? this.result.toString() : this.result.toPrecision(12);
      if (this.countDecimals(result) > 11) {
        this.currentInput = result.toFixed(11);
      } else {
        this.currentInput = result.toString();
      }
      this.currentNum = 0;
      console.log(this.currentInput+' '+this.result);
    }
    this.isLastInputOperation = true;
  }
  doOperation(event: any) {
    this.log += (this.currentNum >= 0) ? this.currentInput : '('+this.currentInput+')';
    this.calculate();
    this.operation = event.target.value;
    this.log += ' ' + this.operation + ' ';
  }
  getResult() {
    this.calculate();
    this.operation = '';
    this.log = '';
  }

}
