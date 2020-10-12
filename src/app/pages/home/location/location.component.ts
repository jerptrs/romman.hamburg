import {
  Component,
  OnInit
} from '@angular/core';
import {
  tileLayer,
  latLng,
  marker,
  icon
} from 'leaflet';
import { ResponsiveHelper } from '../../../common/responsive-helper';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }),
      marker([53.59389, 9.98874], {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/leaflet/marker-icon.png',
          shadowUrl: 'assets/leaflet/marker-shadow.png'
        })
      }).bindPopup('Eppendorfer Marktplatz 21, 22147 Hamburg')
      .openPopup()
    ],
    zoom: 14,
    center: latLng([53.59389, 9.98874])
  };

  constructor(private responsiveHelper: ResponsiveHelper) {}

  public isHandset = this.responsiveHelper.isHandset;

  ngOnInit(): void {}

}
