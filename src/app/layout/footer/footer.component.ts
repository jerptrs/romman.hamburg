import { Component, OnInit } from '@angular/core';
import {faInstagram, faWhatsapp, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { GlobalConstants} from '../../common/global-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  facebookIcon = faFacebook;
  whatsappIcon = faWhatsapp;
  instagramIcon = faInstagram;
  whatsappNumber = GlobalConstants.whatsappNumber;
  whatsappUrl = GlobalConstants.whatsappUrl;
  instagramUrl = GlobalConstants.instagramUrl;
  facebookUrl = GlobalConstants.facebookUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
