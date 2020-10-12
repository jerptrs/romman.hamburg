import { Component, OnInit } from '@angular/core';
import { ResponsiveHelper } from '../../common/responsive-helper';
import { Title } from '@angular/platform-browser';
import { environment } from '@src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  appName: string;

  constructor(private responsiveHelper: ResponsiveHelper, private title: Title) {
    this.appName = environment.name;
  }

  public isHandset = this.responsiveHelper.isHandset;

  ngOnInit(): void {
    this.title.setTitle(`Menu - ${this.appName}`);
  }

}
