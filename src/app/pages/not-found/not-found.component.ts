import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { environment } from '@src/environments/environment';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  appName: string;

  constructor(private location: Location, private title: Title) {
    this.appName = environment.name;
  }

  ngOnInit(): void {
    this.title.setTitle(`Page Not Found - ${this.appName}`);
  }

  return(): void {
    this.location.back();
  }

}
