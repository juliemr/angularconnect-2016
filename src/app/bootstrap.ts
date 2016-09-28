import {NgModule} from '@angular/core';
import {AppComponent} from './app-component';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Board} from './tictactoe';
import {GameComponent} from './game';


@NgModule({
  declarations: [AppComponent, Board, GameComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class MyAppModule{}

platformBrowserDynamic().bootstrapModule(MyAppModule);
