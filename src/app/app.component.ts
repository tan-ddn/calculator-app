import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { LogicService } from './logic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Calculator App';

  readonly operators: string[] = ['+', '-', 'X', '/', '='];
  currentDisplayNum: string = '0';
  lastInput: string = '';
  log: string = '';

  constructor (private elementRef: ElementRef, private logicService: LogicService) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#eee';
  }

  allClear() {
    this.logicService.allClear();
    
    this.currentDisplayNum = '0';
    this.log = '';
    this.lastInput = '';
  }

  insertDot() {
    if (this.isLastInputOperator()) {
      this.currentDisplayNum = '0.';
      this.lastInput = '.';
    }
    if (this.currentDisplayNum.indexOf('.') === -1) {
      this.currentDisplayNum += '.';
      this.lastInput = '.';
    }
  }

  getInput(event: any) {
    if ((!this.isLastInputOperator() && this.lastInput !== '' && this.currentDisplayNum !== '0') ) {
      this.currentDisplayNum += event.target.value;
    } else {
      this.currentDisplayNum = event.target.value;
    }
    this.logicService.setCurrentNum(this.currentDisplayNum);
    this.lastInput = event.target.value;
  }

  clearInput() {
    if (!this.isLastInputOperator() && this.lastInput !== 'T') {
      this.currentDisplayNum = (this.currentDisplayNum.length > 1) ? this.currentDisplayNum.slice(0, -1) : '0';
      this.logicService.setCurrentNum(this.currentDisplayNum);
      this.lastInput = 'C';
    }
  }

  toggleSign() {
    this.currentDisplayNum = this.logicService.toggleSign(this.currentDisplayNum);
    this.lastInput = 'T';
  }

  doOperation(event: any) {
    this.logOperationBegin();
    this.currentDisplayNum = this.logicService.calculate(this.isLastInputOperator());
    this.lastInput = this.logicService.finishOperation(event.target.value);
    this.logOperationEnd();
  }

  getResult() {
    this.currentDisplayNum = this.logicService.calculate(this.isLastInputOperator());
    this.lastInput = this.logicService.finishAll();
    this.log = '';
  }

  isLastInputOperator(): boolean {
    return this.operators.includes(this.lastInput);
  }

  logOperationBegin() {
    if (!this.isLastInputOperator() || this.lastInput === '=') {
      let number: number = Number.parseFloat(this.currentDisplayNum);
      this.log += (number >= 0) ? this.currentDisplayNum + ' ' : '('+this.currentDisplayNum+')' + ' ';
    } else {
      this.log = this.log.slice(0, -2);
    }
  }

  logOperationEnd() {
    this.log += this.lastInput + ' ';
  }

}
