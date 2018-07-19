import { Component, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { LogicService } from './logic.service';
import { EasyReadPipe } from './easyread.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Calculator App';

  readonly operators: string[] = ['+', '-', '*', '/', '='];
  currentDisplayNum: string = '0';
  lastInput: string = '';
  log: string = '';

  keyIn: any;

  constructor (private elementRef: ElementRef, private logicService: LogicService) {  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.fontSize = '17px';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#eee';
  }

  //Listen to keyboard event
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    //console.log(event);
    this.keyIn = event.key; 
    if (isNaN(this.keyIn) || this.keyIn === ' ') {
      switch (this.keyIn) {
        case '+':
        case '-':
        case '*':
        case '/':
          this.doOperation(event);
          break;
        case ' ':
        case '=':
        case 'Enter':
          this.getResult();
          break;
        case '.':
          this.insertDot();
          break;
        case 'Backspace':
          this.clearInput();
          break;
        case 'Escape':
          this.allClear();
          break;
      }
    } else {
      this.getInput(event);
    }
  }

  //Return correct event's value
  getEventValue(event: any): string {
    let eventValue: string;
    if (event instanceof KeyboardEvent) {
      eventValue = event.key;
    } else {
      eventValue = event.target.value;
    }
    return (eventValue === 'Enter') ? '=' : eventValue;
  }

  //Clear all when user clicks AC
  allClear() {
    this.logicService.allClear();
    
    this.currentDisplayNum = '0';
    this.log = '';
    this.lastInput = '';
  }

  //Insert dot for float number
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

  //Update logic service's currentNum and reformat currentDisplayNum
  updateCurrentNum() {
    this.logicService.setCurrentNum(this.currentDisplayNum);
  }

  //Get number input
  getInput(event: any) {
    let eventValue: string = this.getEventValue(event);
    let numberDigits: string = this.currentDisplayNum.replace('-', '').replace('.', '');
    
    if (this.isLastInputOperator() || this.lastInput === '' || this.currentDisplayNum === '0') {
      this.currentDisplayNum = eventValue;
      this.lastInput = eventValue;
    } else if (numberDigits.length < 12) {
      this.currentDisplayNum += eventValue;
      this.lastInput = eventValue;
    }
    
    this.updateCurrentNum();
  }

  //Clear last number input
  clearInput() {
    if (!this.isLastInputOperator() && this.lastInput !== 'T') {
      this.currentDisplayNum = (this.currentDisplayNum.length > 1) ? this.currentDisplayNum.slice(0, -1) : '0';
      this.lastInput = 'C';

      this.updateCurrentNum();
    }
  }

  //Toggle positive/negative number
  toggleSign() {
    let number: number = Number.parseFloat(this.currentDisplayNum);
    if (number > 0) {
      this.currentDisplayNum = '-' + this.currentDisplayNum;
    } else {
      this.currentDisplayNum = this.currentDisplayNum.replace('-', '');
    }
    this.lastInput = 'T';
  }

  //Do + - * /
  doOperation(event: any) {
    let eventValue: string = this.getEventValue(event);

    this.logOperationBegin();
    this.currentDisplayNum = this.logicService.calculate(this.isLastInputOperator()).toString();
    this.lastInput = this.logicService.finishOperation(eventValue);
    this.logOperationEnd();
  }

  //Do =
  getResult() {
    this.currentDisplayNum = this.logicService.calculate(this.isLastInputOperator()).toString();
    this.lastInput = this.logicService.finishAll();
    this.log = '';
  }

  //Check if last input is one of + - * / =
  isLastInputOperator(): boolean {
    return this.operators.includes(this.lastInput);
  }

  //Begin the log on top of calculator
  logOperationBegin() {
    if (!this.isLastInputOperator() || this.lastInput === '=') {
      let number: number = Number.parseFloat(this.currentDisplayNum);
      let easyReadPipeFilter = new EasyReadPipe();
      let numberEasyRead: string = easyReadPipeFilter.transform(this.currentDisplayNum);
      this.log += (number >= 0) ? numberEasyRead + ' ' : '('+numberEasyRead+')' + ' ';
    } else {
      this.log = this.log.slice(0, -2);
    }
  }

  //End the log
  logOperationEnd() {
    this.log += this.lastInput + ' ';
  }

}
