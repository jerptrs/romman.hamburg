import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { LocationComponent } from './location/location.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Title } from '@angular/platform-browser';

@NgModule({
  declarations: [HomeComponent, HeroComponent, AboutComponent, LocationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    LeafletModule,
    MatGridListModule,
    MatDividerModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
