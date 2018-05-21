import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from
  'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Marker } from './marker';

@Injectable()
export class MarkerService {
  markersCollection: AngularFirestoreCollection<Marker>;
  markers: Observable<Marker[]>;
  constructor(public afs: AngularFirestore) {
    afs.firestore.settings({timestampsInSnapshots: true});
    this.markers = this.afs.collection('markers').valueChanges();
  }

  getMarkers() {
    return this.markers;
  }
}
