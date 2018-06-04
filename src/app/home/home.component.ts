import { Component, OnInit, OnDestroy } from '@angular/core';
import { MarkerService } from './../marker.service';
import { Marker } from './../marker';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private subscription: Subscription[] = [];
  markers: Marker[];
  title = 'app';

  onSeeInMapClick(marker: Marker) {
    this.markerService.map.setCenter({ lat: marker.latitude, lng: marker.longitude });
  }
  constructor(public markerService: MarkerService) {}
  ngOnInit() {
    this.subscription.push(this.markerService.getMarkers().subscribe(markers => {
      this.markers = markers;
    }));
  }

  deleteMarker(marker: Marker) {
    this.markerService.deleteMarker(marker);
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
