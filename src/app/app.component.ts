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
  result: number;

  currentNum: number = 0;
  add() {
    this.result = this.num1 + this.num2;
  }
  substract() {
    this.result = this.num1 - this.num2;
  }
  multiply() {
    this.result = this.num1 * this.num2;
  }
  divide() {
    this.result = this.num1 / this.num2;
  }

  getInput(event: any) {
    this.currentNum = event.target.value;
  }
}
