import {
  Component,
  OnInit
} from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/animations';
import { ResponsiveHelper } from '../../../common/responsive-helper';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('inactive', style({
        opacity: 0,
      })),
      transition('inactive => active', [ // using status here for transition
        style({
          opacity: 0
        }),
        animate('1.5s cubic-bezier(.5, .4, .2, 0)', style({
          opacity: 1
        }))
      ]),
      transition('active => inactive', [
        animate('1.5s cubic-bezier(.5, .4, .2, 0)', style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {
  animationDelay = 'inactive';

  constructor(private responsiveHelper: ResponsiveHelper) {}

  public isHandset = this.responsiveHelper.isHandset;

  ngOnInit(): void {
    setTimeout(() => {
      this.animationDelay = 'active';
    }, 800);
  }

  scrollTo(page: string) {
    document.getElementById(page).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
}
