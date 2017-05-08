import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';


@Component ({
  selector: 'amount',
  template: `
  <h1>{{ title }}</h1>
  <form id="playercount">
    <label for="playernumber">Select the amount of players</label><br>
    <a class='sillycircle' (click)="onClick2(4)">4</a>
    <a class='sillycircle' (click)="onClick2(5)">5</a>
    <a class='sillycircle' (click)="onClick2(6)">6</a>
    <a class='sillycircle' (click)="onClick2(7)">7</a>
    <a class='sillycircle' (click)="onClick2(8)">8</a>
  </form>
  <h2>Amount of players: {{ players }}  {{ error }}</h2>
`

})

 export class AmountPlayersComponent {
   title = 'Choose the Amount of Players';
    players = 0;
    error = '';

  onClick2(num){
    this.players = num
    this.buttonCheck(this.players)
  }

  onClick(event){
    this.players = document.querySelector('#playercount > input[type="number"]').value
    this.buttonCheck(this.players)
  }

  buttonCheck(num){
    let firstnode = document.querySelector('#playercount').children[2]
    if (num <= 12 && num >= 4) {
        document.querySelector('#playercount').remove()
        this.error = ''
        this.cardBuilder()
    } else {
      this.error = 'Must choose 4 to 12 players'
    }
  }

  cardBuilder(){
    let playercount = this.players
    for (let x=1; x<=playercount; x++){
      document.querySelector('#gameboard').innerHTML += `<div class="flip-container flip-toggle">
      <div class="flipper">
        <div class="front">
          <!-- front content -->
          Player ${x}
        </div>
        <div class="back">
          <!-- back content -->
          Player ${x}
        </div>
      </div>
    </div>`
    }
    document.querySelector('#gameboard').innerHTML += `<button id="playButton" onclick="flipOver()" class="sexyButton">Play</button>`
  }

}
