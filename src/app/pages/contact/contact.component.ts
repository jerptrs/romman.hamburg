import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponsiveHelper } from '../../common/responsive-helper';
import { Title } from '@angular/platform-browser';
import { environment } from '@src/environments/environment';
import {faPhone, faEnvelope, faClock, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
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

  isHandset = this.responsiveHelper.isHandset;

  appName: string;

  constructor(private formBuilder: FormBuilder, private responsiveHelper: ResponsiveHelper, private title: Title) { 
    this.appName = environment.name;
  }

  ngOnInit(): void {
    this.title.setTitle(`Contact - ${this.appName}`);
  }

  submitForm(): void {
    
  }

}
