(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1.display-4 {\r\n    font-size: 2rem;\r\n}\r\n\r\n.calc-wrapper {\r\n    max-width: 360px;\r\n    margin: auto;\r\n    border: 1px solid #eee;\r\n    background: #f9f9f9;\r\n}\r\n\r\n.calc-screen {\r\n    border: 1px solid #eee;\r\n}\r\n\r\n.calc-screen .calc-log {\r\n    text-align: right;\r\n    height: 2rem;\r\n    padding: .3rem .8rem;\r\n    background: #fff;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.calc-screen .calc-screen-input {\r\n    font-size: 2rem;\r\n    padding: .3rem .8rem;\r\n}\r\n\r\n/*.calc-screen .calc-screen-input .calc-key-input {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    font-size: 1rem;\r\n}*/\r\n\r\n.calc-screen input {\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n\r\n.calc-screen input[type=number]::-webkit-inner-spin-button, \r\n.calc-screen input[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  appearance: none;\r\n  margin: 0; \r\n}\r\n\r\n.btn-toolbar .btn {\r\n    font-size: 17px;\r\n    font-size: 1.6rem;\r\n    padding: .8rem .8rem;\r\n    border-radius: .3rem;\r\n}\r\n\r\n.calc-operation-group .btn {\r\n    flex-grow: 1;\r\n    width: calc(25% - 4px);\r\n    margin: 2px;\r\n}\r\n\r\n.calc-numbers-group .btn {\r\n    flex-grow: 1;\r\n    width: calc(33.333% - 4px);\r\n    margin: 2px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-root-wrap\">\r\n    <div class=\"container\">\r\n      <br/>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <h1 class=\"display-4 text-center\">Welcome to<br/>{{ title }}!</h1>\r\n        </div>\r\n      </div>\r\n      <!--br/>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <input type=\"number\" [(ngModel)]=\"num1\" placeholder=\"Enter Number 1\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <input type=\"number\" [(ngModel)]=\"num2\" placeholder=\"Enter Number 2\" class=\"form-control\" />\r\n        </div>\r\n      </div>\r\n      <br/>\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-md-3\">\r\n          <button class=\"btn btn-secondary\" (click)='add()'>Add</button>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <button class=\"btn btn-secondary\" (click)='substract()'>Substract</button>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <button class=\"btn btn-secondary\" (click)='multiply()'>Multiply</button>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <button class=\"btn btn-secondary\" (click)='divide()'>Divide</button>\r\n        </div>\r\n      </div>\r\n      <br/>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5 col-md-offset-4\">\r\n          <h2>Result = {{ result }}</h2>\r\n        </div>\r\n      </div-->\r\n      <div class=\"row my-3 justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-7 col-sm-12\">\r\n          <div class=\"calc-wrapper shadow p-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\"><div id=\"calc-screen\" class=\"form-group calc-screen \">\r\n                <div class=\"calc-log\">\r\n                  <small>{{log}}</small>\r\n                </div>\r\n                <!--input type=\"text\" [(ngModel)]='currentDisplayNum' class=\"calc-screen-input form-control text-right border-0\"/-->\r\n                <div class=\"calc-screen-input form-control text-right border-0\">\r\n                  <div>{{currentDisplayNum | easyRead}}</div>\r\n                  <!--input type=\"text\" (keydown)=\"onKey($event)\" class=\"calc-key-input form-control text-right border-0\" /-->\r\n                </div>\r\n              </div></div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                  <div class=\"btn-group calc-operation-group flex-wrap flex-grow-1 text-center\" role=\"group\">\r\n                    <button (click)='toggleSign()' class=\"btn btn-primary btn-lg \"><small>+/-</small></button>\r\n                    <button (click)='clearInput()' class=\"btn btn-warning btn-lg\">C</button>\r\n                    <button (click)='allClear()' class=\"btn btn-danger btn-lg \">AC</button>\r\n                  </div>\r\n                  <div class=\"btn-group calc-operation-group flex-wrap flex-grow-1 text-center\" role=\"group\">\r\n                    <button (click)='doOperation($event)' class=\"btn btn-info btn-lg \" value=\"+\">+</button>\r\n                    <button (click)='doOperation($event)' class=\"btn btn-info btn-lg\" value=\"-\">-</button>\r\n                    <button (click)='doOperation($event)' class=\"btn btn-info btn-lg\" value=\"*\">X</button>\r\n                    <button (click)='doOperation($event)' class=\"btn btn-info btn-lg \" value=\"/\">/</button>\r\n                  </div>\r\n                  <div class=\"btn-group calc-numbers-group flex-wrap flex-row-reverse text-center\" role=\"group\">\r\n                    <input type=\"button\" (click)='getInput($event)' class=\"btn btn-secondary btn-lg \" value=\"9\" />\r\n                    <input type=\"button\" (click)='getInput($event)' class=\"btn btn-secondary btn-lg\" value=\"8\" />\r\n                    <input type=\"button\" (click)='getInput($event)' class=\"btn btn-secondary btn-lg\" value=\"7\" />\r\n                    <input type=\"button\" (click)='getInput($event)' class=\"btn btn-secondary btn-lg\" value=\"6\" />\r\n                    <input type=\"button\" (click)='getInput($event)' class=\"btn btn-secondary btn-lg\" value=\"5\" />\r\n                    <input type=\"button\" (click)='getInput($event)' class=\"btn btn-secondary btn-lg\" value=\"4\" />\r\n                    <input type=\"button\" (click)='getInput($event)' class=\"btn btn-secondary btn-lg\" value=\"3\" />\r\n                    <input type=\"button\" (click)='getInput($event)' class=\"btn btn-secondary btn-lg\" value=\"2\" />\r\n                    <input type=\"button\" (click)='getInput($event)' class=\"btn btn-secondary btn-lg \" value=\"1\" />\r\n                  </div>\r\n                  <div class=\"btn-group calc-numbers-group flex-wrap flex-grow-1 text-center\" role=\"group\">\r\n                    <input type=\"button\" (click)='getInput($event)' class=\"btn btn-secondary btn-lg \" value=\"0\" />\r\n                    <input type=\"button\" (click)='insertDot()' class=\"btn btn-secondary btn-lg\" value=\".\" />\r\n                    <input type=\"button\" (click)='getResult()' class=\"btn btn-info btn-lg \" value=\"=\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.service */ "./src/app/logic.service.ts");
/* harmony import */ var _easyread_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./easyread.pipe */ "./src/app/easyread.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(elementRef, logicService) {
        this.elementRef = elementRef;
        this.logicService = logicService;
        this.title = 'Calculator App';
        this.operators = ['+', '-', '*', '/', '='];
        this.currentDisplayNum = '0';
        this.lastInput = '';
        this.log = '';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        //this.elementRef.nativeElement.ownerDocument.body.style.fontSize = '17px';
        //this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#eee';
    };
    //Listen to keyboard event
    AppComponent.prototype.handleKeyboardEvent = function (event) {
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
        }
        else {
            this.getInput(event);
        }
    };
    //Return correct event's value
    AppComponent.prototype.getEventValue = function (event) {
        var eventValue;
        if (event instanceof KeyboardEvent) {
            eventValue = event.key;
        }
        else {
            eventValue = event.target.value;
        }
        return (eventValue === 'Enter') ? '=' : eventValue;
    };
    //Clear all when user clicks AC
    AppComponent.prototype.allClear = function () {
        this.logicService.allClear();
        this.currentDisplayNum = '0';
        this.log = '';
        this.lastInput = '';
    };
    //Insert dot for float number
    AppComponent.prototype.insertDot = function () {
        if (this.isLastInputOperator()) {
            this.currentDisplayNum = '0.';
            this.lastInput = '.';
        }
        if (this.currentDisplayNum.indexOf('.') === -1) {
            this.currentDisplayNum += '.';
            this.lastInput = '.';
        }
    };
    //Update logic service's currentNum and reformat currentDisplayNum
    AppComponent.prototype.updateCurrentNum = function () {
        this.logicService.setCurrentNum(this.currentDisplayNum);
    };
    //Get number input
    AppComponent.prototype.getInput = function (event) {
        var eventValue = this.getEventValue(event);
        var numberDigits = this.currentDisplayNum.replace('-', '').replace('.', '');
        if (this.isLastInputOperator() || this.lastInput === '' || this.currentDisplayNum === '0') {
            this.currentDisplayNum = eventValue;
            this.lastInput = eventValue;
        }
        else if (numberDigits.length < 12) {
            this.currentDisplayNum += eventValue;
            this.lastInput = eventValue;
        }
        this.updateCurrentNum();
    };
    //Clear last number input
    AppComponent.prototype.clearInput = function () {
        if (!this.isLastInputOperator() && this.lastInput !== 'T') {
            this.currentDisplayNum = (this.currentDisplayNum.length > 1) ? this.currentDisplayNum.slice(0, -1) : '0';
            this.lastInput = 'C';
            this.updateCurrentNum();
        }
    };
    //Toggle positive/negative number
    AppComponent.prototype.toggleSign = function () {
        var number = Number.parseFloat(this.currentDisplayNum);
        if (number > 0) {
            this.currentDisplayNum = '-' + this.currentDisplayNum;
        }
        else {
            this.currentDisplayNum = this.currentDisplayNum.replace('-', '');
        }
        this.lastInput = 'T';
    };
    //Do + - * /
    AppComponent.prototype.doOperation = function (event) {
        var eventValue = this.getEventValue(event);
        this.logOperationBegin();
        this.currentDisplayNum = this.logicService.calculate(this.isLastInputOperator()).toString();
        this.lastInput = this.logicService.finishOperation(eventValue);
        this.logOperationEnd();
    };
    //Do =
    AppComponent.prototype.getResult = function () {
        this.currentDisplayNum = this.logicService.calculate(this.isLastInputOperator()).toString();
        this.lastInput = this.logicService.finishAll();
        this.log = '';
    };
    //Check if last input is one of + - * / =
    AppComponent.prototype.isLastInputOperator = function () {
        return this.operators.includes(this.lastInput);
    };
    //Begin the log on top of calculator
    AppComponent.prototype.logOperationBegin = function () {
        if (!this.isLastInputOperator() || this.lastInput === '=') {
            var number = Number.parseFloat(this.currentDisplayNum);
            var easyReadPipeFilter = new _easyread_pipe__WEBPACK_IMPORTED_MODULE_2__["EasyReadPipe"]();
            var numberEasyRead = easyReadPipeFilter.transform(this.currentDisplayNum);
            this.log += (number >= 0) ? numberEasyRead + ' ' : '(' + numberEasyRead + ')' + ' ';
        }
        else {
            this.log = this.log.slice(0, -2);
        }
    };
    //End the log
    AppComponent.prototype.logOperationEnd = function () {
        this.log += this.lastInput + ' ';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "handleKeyboardEvent", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _logic_service__WEBPACK_IMPORTED_MODULE_1__["LogicService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _easyread_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./easyread.pipe */ "./src/app/easyread.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _easyread_pipe__WEBPACK_IMPORTED_MODULE_4__["EasyReadPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/easyread.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/easyread.pipe.ts ***!
  \**********************************/
/*! exports provided: EasyReadPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyReadPipe", function() { return EasyReadPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EasyReadPipe = /** @class */ (function () {
    function EasyReadPipe() {
    }
    EasyReadPipe.prototype.transform = function (numberString) {
        var dotPos = numberString.indexOf('.');
        var number = Number.parseFloat(numberString);
        if (Math.abs(number) >= 1e+12 || (Math.abs(number) < 1e-11 && number !== 0)) {
            return number.toExponential(9);
        }
        else if (Math.abs(number) < 1e-6 && number !== 0 && numberString.indexOf('e-') !== -1) {
            var exp = (numberString.split('e-')[1]) ? numberString.split('e-')[1] : '';
            var fracDigits = Number.parseInt(exp);
            /*console.log(numberString);
            console.log(fracDigits);*/
            return number.toLocaleString(undefined, {
                minimumFractionDigits: fracDigits
            });
        }
        else if (dotPos === -1) {
            return number.toLocaleString();
        }
        else {
            var fractionalPart = numberString.slice(dotPos + 1);
            var fracDigits = (fractionalPart.length < 11) ? fractionalPart.length : 11;
            var dot = (fracDigits === 0) ? '.' : '';
            return number.toLocaleString(undefined, {
                minimumFractionDigits: fracDigits
            }) + dot;
        }
    };
    EasyReadPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'easyRead'
        })
    ], EasyReadPipe);
    return EasyReadPipe;
}());



/***/ }),

/***/ "./src/app/logic.service.ts":
/*!**********************************!*\
  !*** ./src/app/logic.service.ts ***!
  \**********************************/
/*! exports provided: LogicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicService", function() { return LogicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogicService = /** @class */ (function () {
    function LogicService() {
        this.currentNum = 0;
        this.operation = '';
        this.result = 0;
    }
    LogicService.prototype.allClear = function () {
        this.currentNum = 0;
        this.operation = '';
        this.result = 0;
    };
    LogicService.prototype.setCurrentNum = function (val) {
        this.currentNum = Number.parseFloat(val);
    };
    LogicService.prototype.getCurrentNum = function () {
        return this.currentNum;
    };
    /*toggleSign(val: string): number {
      this.currentNum = Number.parseFloat(val);
      if (this.currentNum !== 0) {
        this.currentNum *= -1;
      }
      return this.currentNum;
    }*/
    LogicService.prototype.calculate = function (isLastInputOperator) {
        if (!isLastInputOperator) {
            var a = this.result;
            var b = this.currentNum;
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
    };
    LogicService.prototype.finishOperation = function (val) {
        this.operation = val;
        return this.operation;
    };
    LogicService.prototype.finishAll = function () {
        this.operation = '';
        return '=';
    };
    LogicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LogicService);
    return LogicService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\calculator-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map