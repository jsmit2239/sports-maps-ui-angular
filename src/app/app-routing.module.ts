import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhlComponent } from './ahl/ahl.component';
import { MlbComponent } from './mlb/mlb.component';
import { NbaComponent } from './nba/nba.component';
import { NflComponent } from './nfl/nfl.component';
import { NhlComponent } from './nhl/nhl.component';

const routes: Routes = [
  { path: '', component: MlbComponent },
  { path: 'mlb', component: MlbComponent },
  { path: 'nba', component: NbaComponent },
  { path: 'nfl', component: NflComponent },
  { path: 'nhl', component: NhlComponent },
  { path: 'ahl', component: AhlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
