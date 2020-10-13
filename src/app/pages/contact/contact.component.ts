import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponsiveHelper } from '../../common/responsive-helper';
import { Title } from '@angular/platform-browser';
import { environment } from '@src/environments/environment';
import {faPhone, faEnvelope, faClock, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, style, animate, state } from '@angular/animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-150%)'}),
        animate('800ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('800ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ]),
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
export class ContactComponent implements OnInit {
  phoneIcon = faPhone;
  envelopeIcon = faEnvelope;
  clockIcon = faClock;
  mapMarkerIcon = faMapMarkedAlt;
  contactForm: FormGroup = this.formBuilder.group({
    name: ['', {
      validators: [Validators.required]
    }],
    email: ['', {
      validators: [Validators.required]
    }],
    message: ['', {
      validators: [Validators.required]
    }]
  })
  animationDelay = 'inactive';
  isHandset = this.responsiveHelper.isHandset;

  appName: string;

  constructor(private formBuilder: FormBuilder, private responsiveHelper: ResponsiveHelper, private title: Title) { 
    this.appName = environment.name;
  }

  ngOnInit(): void {
    this.title.setTitle(`Contact - ${this.appName}`);
    setTimeout(() => {
      this.animationDelay = 'active';
    }, 800);
  }

  submitForm(): void {
    
  }

}
