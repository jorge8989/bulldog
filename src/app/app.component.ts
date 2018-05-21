import { Component, OnInit } from '@angular/core';
import { MarkerService } from './marker.service';
import { MapComponent } from './map/map.component';
import { Marker } from './marker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  markers: Marker[];
  title = 'app';
  constructor(public markerService: MarkerService) {}
  ngOnInit() {
    this.markerService.getMarkers().subscribe(markers => {
      this.markers = markers;
    });
  }
}
