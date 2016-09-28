import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {
  By
} from '@angular/platform-browser';
import { GameComponent } from './game';

describe('Game UI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [GameComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it('should render', () => {
    let fixture = TestBed.createComponent(GameComponent);
    
    expect(fixture.nativeElement.textContent).toContain('Player X');
  });

  it('should listen to events', () => {
    let fixture = TestBed.createComponent(GameComponent);

    fixture.debugElement.query(By.css('ttt-board')).triggerEventHandler('endgame', '_');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Tie!');
  });

  it('should listen to events', () => {
    let fixture = TestBed.createComponent(GameComponent);

    fixture.debugElement.query(By.css('ttt-board')).triggerEventHandler('turnswap', 'o');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Elizabeth\'s turn');
  });

  it('should bind to player name', () => {
    let fixture = TestBed.createComponent(GameComponent);

    expect(fixture.nativeElement.textContent).toContain('Jane\'s turn');
    
    fixture.componentInstance.playerX = 'Eddie';
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Eddie\'s turn');
  });
});
