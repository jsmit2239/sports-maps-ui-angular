import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-bar',
  templateUrl: './league-bar.component.html',
  styleUrls: ['./league-bar.component.css'],
})
export class LeagueBarComponent {

  mlbSelected = true;
  nbaSelected = false;
  nflSelected = false;
  nhlSelected = false;


  mlbButtonSelected() {
    this.mlbSelected = true;
    this.nbaSelected = false;
    this.nflSelected = false;
    this.nhlSelected = false;
  }

  nbaButtonSelected() {
    this.mlbSelected = false;
    this.nbaSelected = true;
    this.nflSelected = false;
    this.nhlSelected = false;
  }

  nflButtonSelected() {
    this.mlbSelected = false;
    this.nbaSelected = false;
    this.nflSelected = true;
    this.nhlSelected = false;
  }

  nhlButtonSelected() {
    this.mlbSelected = false;
    this.nbaSelected = false;
    this.nflSelected = false;
    this.nhlSelected = true;
  }
}
