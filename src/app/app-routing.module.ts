import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MlbComponent } from './mlb/mlb.component';
import { NbaComponent } from './nba/nba.component';
import { NhlComponent } from './nhl/nhl.component';

const routes: Routes = [
  { path: 'nhl', component: NhlComponent },
  { path: 'mlb', component: MlbComponent },
  { path: 'nba', component: NbaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
