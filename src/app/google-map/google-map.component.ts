import { Component, Input } from '@angular/core';
import { Marker } from './../marker';
import { MarkerService } from './../marker.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent {
  handleMapReady(map) {
    this.markerService.setMap(map);
  }

  @Input() markers: Marker[];
  constructor(public markerService: MarkerService) { }
}
