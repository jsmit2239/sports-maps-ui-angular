import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MlbComponent } from './mlb/mlb.component';
import { NbaComponent } from './nba/nba.component';
import { NflComponent } from './nfl/nfl.component';
import { NhlComponent } from './nhl/nhl.component';

const routes: Routes = [
  { path: '', component: NflComponent },
  { path: 'mlb', component: MlbComponent },
  { path: 'nba', component: NbaComponent },
  { path: 'nfl', component: NflComponent },
  { path: 'nhl', component: NhlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
