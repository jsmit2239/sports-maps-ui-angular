import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapTestComponent } from './map-test/map-test.component';
import { MlbComponent } from './mlb/mlb.component';
import { NhlComponent } from './nhl/nhl.component';

const routes: Routes = [
  { path: 'nhl', component: NhlComponent },
  { path: 'mlb', component: MlbComponent },
  { path: 'map-test', component: MapTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
