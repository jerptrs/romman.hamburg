import { Component, OnInit } from '@angular/core';
import { faBeer, faUtensils, faCoffee, faWineBottle, faHeart, faCircle } from '@fortawesome/free-solid-svg-icons';
import { ResponsiveHelper } from '../../../common/responsive-helper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  beerIcon = faBeer;
  utensilsIcon = faUtensils;
  coffeeIcon = faCoffee;
  wineBottleIcon = faWineBottle;
  heartIcon = faHeart;
  circleIcon = faCircle;
  
  constructor(private responsiveHelper: ResponsiveHelper) {}

  public isHandset = this.responsiveHelper.isHandset;

  ngOnInit(): void {
  }

}
