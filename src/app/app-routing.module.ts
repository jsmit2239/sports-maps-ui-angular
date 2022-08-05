import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhlComponent } from './ahl/ahl.component';
import { HttpRequestsComponent } from './http-requests/http-requests.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MlbComponent } from './mlb/mlb.component';
import { NbaComponent } from './nba/nba.component';
import { NflComponent } from './nfl/nfl.component';
import { NhlScheduleComponent } from './nhl-schedule/nhl-schedule.component';
import { NhlComponent } from './nhl/nhl.component';
import { ParentChildComponent } from './parent-child/parent-child.component';

const routes: Routes = [
  { path: '', component: MlbComponent },
  { path: 'mlb', component: MlbComponent },
  { path: 'nba', component: NbaComponent },
  { path: 'nfl', component: NflComponent },
  { path: 'nhl', component: NhlComponent },
  { path: 'ahl', component: AhlComponent },
  { path: 'nhl-schedule', component: NhlScheduleComponent },

  { path: 'http-requests', component: HttpRequestsComponent },
  { path: 'parent-child', component: ParentChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
