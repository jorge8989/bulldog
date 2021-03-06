import { Component, OnInit } from '@angular/core';
import { MarkerService } from './../marker.service';
import { Marker } from './../marker';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-marker',
  templateUrl: './add-marker.component.html',
  styleUrls: ['./add-marker.component.css']
})
export class AddMarkerComponent implements OnInit {
  marker: Marker = {
    name: '',
    description: '',
  };
  constructor(public markerService: MarkerService, private router: Router) { }
  ngOnInit() {
  }
  onSubmit() {
    if (this.marker.name != '' && this.marker.description != '') {
      this.markerService.addMarker(this.marker, () => {
        this.router.navigate(['/']);
      });
      this.marker.name = '';
      this.marker.description = '';
    }
  }

}
