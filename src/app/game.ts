import {Component, ViewChild} from '@angular/core';
import {Board} from './tictactoe';

@Component({
  selector: 'ttt-game',
  template: `
    <div><span>Player X</span>
    <input type="text" class="form-control" id="ttt-x-name"
       required
       [(ngModel)]="playerX">
    </div>

    <div><span>Player 0</span>
    <input type="text" class="form-control" id="ttt-o-name"
       required
       [(ngModel)]="playerO">
    </div>

    <div class="turn" *ngIf="xTurn">X {{playerX}}'s turn</div>
    <div class="turn" *ngIf="oTurn">O {{playerO}}'s turn</div>

    <ttt-board
        (endgame)="handleEndgame($event)"
        (turnswap)="swapActive($event)"></ttt-board>

    <div><span class="outcome">{{outcome}}</span></div>
    <div><button (click)="reset()" *ngIf="outcome">Reset</button></div>
  `,
})
export class GameComponent {

  @ViewChild(Board)
  private board: Board;
  
  public playerX = 'Jane';
  public playerO = 'Elizabeth';
  public outcome: string;
  public xTurn = true;
  public oTurn = false;

  swapActive(player) {
    if (player == '_') {
      this.xTurn = this.oTurn = false;
    }

    if (player == 'x') {
      this.xTurn = true;
      this.oTurn = false;
    }

    if (player == 'o') {
      this.xTurn = false;
      this.oTurn = true;
    }
  }

  reset() {
    this.xTurn = true;
    this.oTurn = false;
    this.outcome = '';
    this.board.reset();
  }

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
