import {NgModule} from '@angular/core';
import {AppComponent} from './app-component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Board} from './tictactoe';
import {GameComponent} from './game';


@NgModule({
  declarations: [AppComponent, Board, GameComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class MyAppModule{}

platformBrowserDynamic().bootstrapModule(MyAppModule);
