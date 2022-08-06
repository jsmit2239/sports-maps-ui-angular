import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NhlComponent } from './nhl/nhl.component';
import { MlbComponent } from './mlb/mlb.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AgmCoreModule } from '@agm/core';
import { NbaComponent } from './nba/nba.component';
import { NflComponent } from './nfl/nfl.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpRequestsComponent } from './http-requests/http-requests.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestsService } from './http-requests/http-requests.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { AhlComponent } from './ahl/ahl.component';
import { NhlScheduleComponent } from './nhl-schedule/nhl-schedule.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NhlComponent,
    MlbComponent,
    NbaComponent,
    NflComponent,
    LandingPageComponent,
    HttpRequestsComponent,
    ParentChildComponent,
    AhlComponent,
    NhlScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
    HttpClientModule,
    MatIconModule,
    OverlayModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [HttpRequestsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
