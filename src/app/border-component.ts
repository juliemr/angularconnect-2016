import {Component} from '@angular/core';

@Component({
  selector: 'my-fancy-border',
  templateUrl: 'dist/app/border-component.html',
  styleUrls: ['dist/app/border-component.css'],
  inputs: ['title: title']
})
export class BorderComponent {
  title: string;
}
