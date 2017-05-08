System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AmountPlayersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AmountPlayersComponent = (function () {
                function AmountPlayersComponent() {
                    this.title = 'Choose the Amount of Players';
                    this.players = 0;
                    this.error = '';
                }
                AmountPlayersComponent.prototype.onClick = function (event) {
                    this.players = document.querySelector('#playercount > input[type="number"]').value;
                    this.buttonCheck(this.players);
                };
                AmountPlayersComponent.prototype.buttonCheck = function (num) {
                    var firstnode = document.querySelector('#playercount').children[2];
                    if (num <= 12 && num >= 4) {
                        document.querySelector('#playercount').removeChild(firstnode);
                        this.error = '';
                        this.cardBuilder();
                    }
                    else {
                        this.error = 'Must choose 4 to 12 players';
                    }
                };
                AmountPlayersComponent.prototype.cardBuilder = function () {
                    var playercount = this.players;
                    console.log(this.players);
                    for (var x = playercount; x > 0; x--) {
                        document.querySelector('#gameboard').innerHTML += "<div class=\"flip-container flip-toggle\">\n      <div class=\"flipper\">\n        <div class=\"front\">\n          <!-- front content -->\n          Front\n        </div>\n        <div class=\"back\">\n          <!-- back content -->\n          Back\n        </div>\n      </div>\n    </div>";
                    }
                };
                AmountPlayersComponent = __decorate([
                    core_1.Component({
                        selector: 'amount',
                        template: "\n  <h1>{{ title }}</h1>\n  <form id=\"playercount\">\n    <label for=\"playernumber\">Select the amount of players</label>\n    <input type=\"number\" name=\"playernumber\">\n    <button (click)=\"onClick($event)\"  >Submit</button>\n  </form>\n  {{ button }} <br>\n  <h2>Amount of players: {{ players }}  {{ error }}</h2>\n  \n  <div id=\"gameboard\"></div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AmountPlayersComponent);
                return AmountPlayersComponent;
            }());
            exports_1("AmountPlayersComponent", AmountPlayersComponent);
        }
    }
});
//# sourceMappingURL=amountplayers.component.js.map