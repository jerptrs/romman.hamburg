import {
  Component,
  ElementRef,
  HostListener,
  ViewChild
} from '@angular/core';
import { ResponsiveHelper } from './common/responsive-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show = true;

  constructor(private responsiveHelper: ResponsiveHelper) {}

  public isHandset = this.responsiveHelper.isHandset;

  @ViewChild('toolbar') Toolbar: ElementRef;
  @HostListener('window:scroll', ['$event'])

  // onWindowScroll(event) {
  //   console.log(event.target.scrollTop);
  //   console.log(event.target.scrollBottom)
  // }
  

  ngOnInit(): void {}
}
