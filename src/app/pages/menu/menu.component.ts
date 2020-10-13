import { Component, OnInit } from '@angular/core';
import { ResponsiveHelper } from '../../common/responsive-helper';
import { Title } from '@angular/platform-browser';
import { environment } from '@src/environments/environment';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('inactive', style({
        opacity: 0,
      })),
      transition('inactive => active', [ // using status here for transition
        style({
          opacity: 0
        }),
        animate('1.25s cubic-bezier(.5, .4, .2, 0)', style({
          opacity: 1
        }))
      ]),
      transition('active => inactive', [
        animate('1.25s cubic-bezier(.5, .4, .2, 0)', style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  appName: string;
  animationDelay = 'inactive';
  constructor(private responsiveHelper: ResponsiveHelper, private title: Title) {
    this.appName = environment.name;
  }

  public isHandset = this.responsiveHelper.isHandset;

  ngOnInit(): void {
    this.title.setTitle(`Menu - ${this.appName}`);
    setTimeout(() => {
      this.animationDelay = 'active';
    }, 800);
  }

}
