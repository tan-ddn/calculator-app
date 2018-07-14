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

  previousNum: number = 0;
  currentNum: number = 0;
  currentInput: string = '0';
  operation: string = '+';
  result: number = 0;

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
    this.previousNum = 0;
    this.currentNum = 0;
    this.currentInput = '0';
    this.operation = '+';
    this.result = 0;
  }
  getInput(event: any) {
    //console.log(isNaN(event.target.value)+' '+Number.isNaN(event.target.value));
    if (event.target.value === '.' && this.currentInput.indexOf('.') !== -1) {
      return;
    }
    if (this.currentInput === '0' || this.result !== 0) {
      this.result = 0;
      this.currentInput = (event.target.value === '.') ? '0' + event.target.value : event.target.value; 
    } else {
      this.currentInput += event.target.value;
    }
    this.currentNum = Number.parseFloat(this.currentInput);
    console.log(this.currentInput+' '+this.currentNum);
  }
  doOperation(event: any) {
    this.getResult();
    this.previousNum = this.result;
    this.currentInput = '0';
    this.operation = event.target.value;
  }
  getResult() {
    this.num1 = this.previousNum;
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
    }
    this.currentInput = this.result.toString();
  }

}
