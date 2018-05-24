import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { MarkerService } from './marker.service';


import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GoogleMapComponent } from './google-map/google-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'bulldog'),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: environment.firebase.googleMapsKey
    })
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
