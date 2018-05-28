import { Component, OnInit } from '@angular/core';
import { MarkerService } from './../marker.service';
import { MapComponent } from './../map/map.component';
import { Marker } from './../marker';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  markers: Marker[];
  title = 'app';
  constructor(public markerService: MarkerService) {}
  ngOnInit() {
    this.markerService.getMarkers().subscribe(markers => {
      this.markers = markers;
    });
  }
}
