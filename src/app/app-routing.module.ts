import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMarkerComponent } from './add-marker/add-marker.component';
import { EditMarkerComponent } from './edit-marker/edit-marker.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'markers/new', component: AddMarkerComponent },
  { path: 'markers/:id/edit', component: EditMarkerComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
