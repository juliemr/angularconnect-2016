import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  By
} from '@angular/platform-browser';
import { Board } from './tictactoe';


describe('winning Tic-Tac-Toe', () => {
  let board: Board;

  beforeEach(() => {
    board = new Board();
  });

  it('should have no winner', () => {
    let winner = board.checkForEndgame([
      ['x', '_', '_',],
      ['x', '_', '_',],
      ['o', '_', '_',]
    ]);

    expect(winner).toEqual(null);

    winner = board.checkForEndgame([
      ['o', '_', '_',],
      ['x', 'x', '_',],
      ['o', '_', 'x',]
    ]);

    expect(winner).toEqual(null);
  });

  it('should have a winner', () => {
    let winner = board.checkForEndgame([
      ['x', 'o', 'o',],
      ['x', 'x', '_',],
      ['o', 'o', 'x',]
    ]);

    expect(winner).toEqual('x');

    winner = board.checkForEndgame([
      ['o', '_', '_',],
      ['o', 'x', '_',],
      ['o', '_', 'x',]
    ]);

    expect(winner).toEqual('o');

    winner = board.checkForEndgame([
      ['x', '_', 'x',],
      ['o', 'o', 'o',],
      ['o', '_', 'x',]
    ]);

    expect(winner).toEqual('o');
  });

  it('should be a draw', () => {
    let winner = board.checkForEndgame([
      ['x', 'o', 'x',],
      ['o', 'x', 'o',],
      ['o', 'x', 'o',]
    ]);

    expect(winner).toEqual('_');
  });
});

describe('Tic-Tac-Toe board', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Board]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it('should respond to click events', () => {
    let fixture = TestBed.createComponent(Board);
    fixture.detectChanges();

    let board = fixture.nativeElement;
    let box = board.querySelectorAll('.ttt-box')[0];
    
    expect(box.textContent).toContain('_');

    box.click();
    fixture.detectChanges();

    expect(box.textContent).toContain('x');
  });

  it('should respond to keyboard events', () => {
    let fixture = TestBed.createComponent(Board);
    fixture.detectChanges();

    var event1 = new KeyboardEvent('keydown', {
      key: '1'
    });

    var event3 = new KeyboardEvent('keydown', {
      key: '3'
    });

    window.dispatchEvent(event1);
    window.dispatchEvent(event3);
    fixture.detectChanges();

    let board = fixture.nativeElement;
    let box = board.querySelectorAll('.ttt-box')[2];

    expect(box.textContent).toContain('x');
  });
});
