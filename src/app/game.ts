import {Component} from '@angular/core';

@Component({
  selector: 'ttt-game',
  template: `
    <div>Player X: {{playerX}}</div><div>Player O: {{playerO}}</div>
    <ttt-board (endgame)="handleEndgame($event)"></ttt-board>
  `,
})
export class GameComponent {
  
  public playerX = 'Jane';
  public playerO = 'Elizabeth';

  handleEndgame(event) {
    console.log('endgame:' );
    console.log(event);
  }
}
