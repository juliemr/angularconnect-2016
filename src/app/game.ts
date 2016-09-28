import {Component} from '@angular/core';

@Component({
  selector: 'ttt-game',
  template: `
    <div>Player X: {{playerX}}</div><div>Player O: {{playerO}}</div>
    <ttt-board (endgame)="handleEndgame($event)"></ttt-board>
    <div><span class="outcome">{{outcome}}</span></div>
  `,
})
export class GameComponent {
  
  public playerX = 'Jane';
  public playerO = 'Elizabeth';
  public outcome: string;

  handleEndgame(endgame) {
    if (endgame == '_') {
      this.outcome = 'Tie!';
    } else if (endgame == 'x') {
      this.outcome = this.playerX + ' wins!';
    } else if (endgame == 'o') {
      this.outcome = this.playerO + ' wins!';
    }
  }
}
