import {Component, Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: 'ttt-board',
  templateUrl: 'dist/app/tictactoe.html',
  styleUrls: ['dist/app/tictactoe.css']
})
export class Board {
  @Output() endgame = new EventEmitter<string>();

  public rows: number[];
  public columns: number[];
  public selectedRow: number = null;

  private grid: string[][];
  private player = 'x';

  constructor() {
    this.rows = [1, 2, 3];
    this.columns = [1, 2, 3];
    this.reset();
  }

  reset() {
    this.grid = [];

    for (let i = 0; i < this.rows.length; i++) {
      this.grid.push([]);
      for (let j = 0; j < this.columns.length; j++) {
        this.grid[i].push('_');
      }
    }
  }

  getOwner(row: number, col: number): string {
    return this.grid[row - 1][col - 1];
  }

  handleCheck(row: number, col: number) {
    if (this.grid[row - 1][col - 1] == '_') {
      this.grid[row - 1][col - 1] = this.player;
      this.player = this.player == 'x' ? 'o' : 'x';
    }
    this.checkForEndgame(this.grid);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event) {
    console.log(event);
    let numberKey;
    if (event.keyCode) {
      numberKey = event.keyCode - 48;
    } else {
      numberKey = +event.key;
    }

    if (numberKey > 0 && numberKey <= this.rows.length) {
      if (this.selectedRow == null) {
        this.selectedRow = numberKey;
      } else {
        this.handleCheck(this.selectedRow, numberKey);
        this.selectedRow = null;
      }
    } else {
      this.selectedRow = null;
    }

  }

  checkForEndgame(grid) {
    // Assumes a square grid.
    // Rows.
    for (let i = 0; i < grid.length; i++) {
      let owner = grid[i][0];
      let winner = owner != '_';
      for (let j = 0; j < grid[i].length; j++) {
        let newOwner = grid[i][j];
        if (owner != newOwner) {
          winner = false;
        }
      }
      if (winner) {
        return this.emitWinner(owner);
      }
    }
    // Cols.
    for (let j = 0; j < grid[0].length; j++) {
      let owner = grid[0][j];
      let winner = owner != '_';
      for (let i = 0; i < grid.length; i++) {
        let newOwner = grid[i][j];
        if (owner != newOwner) {
          winner = false;
        }
      }
      if (winner) {
        return this.emitWinner(owner);
      }
    }
    // Diagonals.
    let owner = grid[0][0];
    let winner = owner != '_';
    for (let k = 0; k < grid.length; k++) {
      let newOwner = grid[k][k];
      if (owner != newOwner) {
        winner = false;
      }
    }
    if (winner) {
      return this.emitWinner(owner);
    }
    owner = grid[grid.length - 1][0];
    winner = owner != '_';
    for (let k = 0; k < grid.length; k++) {
      let newOwner = grid[grid.length - k - 1][k];
      if (owner != newOwner) {
        winner = false;
      }
    }
    if (winner) {
      return this.emitWinner(owner);
    }

    // All full.
    let full = true;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] == '_') {
          full = false;
        }
      }
    }
    if (full) {
      return this.emitWinner('_');
    }
    return null;
  }

  emitWinner(winner) {
    this.endgame.emit(winner);
    return winner;
  }
}
