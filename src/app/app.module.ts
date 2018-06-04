import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { MarkerService } from './marker.service';


import { GoogleMapComponent } from './google-map/google-map.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddMarkerComponent } from './add-marker/add-marker.component';
import { FormsModule } from '@angular/forms';
import { EditMarkerComponent } from './edit-marker/edit-marker.component';

@NgModule({
  declarations: [
    GoogleMapComponent,
    HomeComponent,
    AppComponent,
    AddMarkerComponent,
    EditMarkerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
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
