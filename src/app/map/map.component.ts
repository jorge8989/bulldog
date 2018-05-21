import { Component, OnInit } from '@angular/core';
import { MarkerService } from './../marker.service';
import { Marker } from './../marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markers: Marker[];
  constructor(public markerService: MarkerService) {}
  ngOnInit() {
    this.markerService.getMarkers().subscribe(markers => {
      this.markers = markers;
    });
  }
}
