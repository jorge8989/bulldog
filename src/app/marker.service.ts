import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from
  'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Marker } from './marker';

@Injectable()
export class MarkerService {
  public map: any;
  markersCollection: AngularFirestoreCollection<Marker>;
  markers: Observable<Marker[]>;
  markerDoc: AngularFirestoreDocument<Marker>;

  constructor(public afs: AngularFirestore) {
    afs.firestore.settings({timestampsInSnapshots: true});
    this.markersCollection = this.afs.collection('markers');
    //this.markers = this.afs.collection('markers').valueChanges();
    this.markers = this.afs.collection('markers').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Marker;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getMarkers() {
    return this.markers;
  }

  setMap(map: any) {
    this.map = map;;
  }

  addMarker(marker: Marker) {
    this.markersCollection.add(marker);
  }

  deleteMarker(marker: Marker) {
    this.markerDoc = this.afs.doc(`markers/${marker.id}`)
    this.markerDoc.delete();
  }
}
