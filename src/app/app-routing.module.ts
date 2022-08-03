import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpRequestsComponent } from './http-requests/http-requests.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MlbComponent } from './mlb/mlb.component';
import { NhlComponent } from './nhl/nhl.component';
import { ParentChildComponent } from './parent-child/parent-child.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'nhl', component: NhlComponent },
  { path: 'mlb', component: MlbComponent },
  { path: 'http-requests', component: HttpRequestsComponent },
  { path: 'parent-child', component: ParentChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
