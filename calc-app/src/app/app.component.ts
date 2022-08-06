import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc-app';
  firstOperand = '';
  secondOperand = '';
  operator = '';
  calculation = 0;


  insertNumber(num: string) {
    if (this.firstOperand && this.operator) {
      this.secondOperand = this.secondOperand + num
    } else {
      this.firstOperand = this.firstOperand + num;
    }
  }

  insertOperator(op: string) {
    if (this.firstOperand) {
      this.operator = op;
    }
  }

  runCalculation() {
    switch (this.operator) {
      case '+':
        this.calculation = Number(this.firstOperand) + Number(this.secondOperand)
        break;
      case '-':
        this.calculation = Number(this.firstOperand) - Number(this.secondOperand)
        break;
      case '*':
        this.calculation = Number(this.firstOperand) * Number(this.secondOperand)
        break;
      case '÷':
        this.calculation = Number(this.firstOperand) / Number(this.secondOperand)
        break;
      default:
        'error'
    }
  }

  allClear() {
    this.firstOperand = '';
    this.secondOperand = '';
    this.operator = '';
    this.calculation= 0;
  }
}
