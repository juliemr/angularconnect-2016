import {Component} from '@angular/core';

@Component({
  selector: 'my-fancy-border',
  templateUrl: 'built/app/border-component.html',
  styleUrls: ['built/app/border-component.css'],
  inputs: ['title: title']
})
export class BorderComponent {
  title: string;
}
