import { Component, OnInit } from '@angular/core';
import { MarkerService } from './../marker.service';
import { Marker } from './../marker';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-marker',
  templateUrl: './edit-marker.component.html',
  styleUrls: ['./edit-marker.component.css']
})
export class EditMarkerComponent implements OnInit {
  marker: Marker;
  markerId: string;
  private sub: any;

  constructor(public markerService: MarkerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.markerId = params['id'];
      this.markerService.getMarker(this.markerId, (marker) => {
        this.marker = marker;
      })
    });
  }
  onSubmit() {
    this.markerService.updateMarker(this.marker, this.markerId, () => {
      this.router.navigate(['/']);
    });
  }

}
