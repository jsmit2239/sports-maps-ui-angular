import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NhlComponent } from './nhl/nhl.component';
import { MlbComponent } from './mlb/mlb.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AgmCoreModule } from '@agm/core';
import { NbaComponent } from './nba/nba.component';
import { NflComponent } from './nfl/nfl.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NhlComponent,
    MlbComponent,
    NbaComponent,
    NflComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
