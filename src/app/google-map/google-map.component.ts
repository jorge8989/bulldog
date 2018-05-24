import { Component, Input } from '@angular/core';
import { Marker } from './../marker';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {
  @Input() markers: Marker[];
  constructor() { }
}
