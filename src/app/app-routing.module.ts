import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MlbComponent } from './mlb/mlb.component';
import { NhlComponent } from './nhl/nhl.component';

const routes: Routes = [
  { path: 'nhl', component: NhlComponent },
  { path: 'mlb', component: MlbComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
