import {Component} from 'angular2/core';

@Component ({
  selector: 'amount',
  template: `
  <h1>{{ title }}</h1>
  <form id="playercount">
    <label for="playernumber">Select the amount of players</label>
    <input type="number" name="playernumber">
    <button (click)="onClick($event)"  >Submit</button>
  </form>
  {{ button }} <br>
  <h2>Amount of players: {{ players }}  {{ error }}</h2>
  
  <div id="gameboard"></div>
`
  
})
 
 export class AmountPlayersComponent {
   title = 'Choose the Amount of Players';
    players = 0;
    error = '';
  onClick(event){
    this.players = document.querySelector('#playercount > input[type="number"]').value
    this.buttonCheck(this.players)
  }

  buttonCheck(num){
    let firstnode = document.querySelector('#playercount').children[2]
    if (num <= 12 && num >= 4) {
        document.querySelector('#playercount').removeChild(firstnode)
        this.error = ''
        this.cardBuilder()
    } else {
      this.error = 'Must choose 4 to 12 players'
    }
  }

  cardBuilder(){
    let playercount = this.players
    console.log(this.players)
    for (let x=playercount; x>0; x--){
      document.querySelector('#gameboard').innerHTML += `<div class="flip-container flip-toggle">
      <div class="flipper">
        <div class="front">
          <!-- front content -->
          Front
        </div>
        <div class="back">
          <!-- back content -->
          Back
        </div>
      </div>
    </div>`
    }
  }
  
}