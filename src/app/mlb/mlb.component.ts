import { Component } from '@angular/core';
import {
  MlbDivision,
  MlbLeague,
} from 'src/assets/baseball/mlb/enums/mlb-enums';
import { mlbTeamDetails } from 'src/assets/baseball/mlb/team-details/mlb-team-details';

@Component({
  selector: 'app-mlb',
  templateUrl: './mlb.component.html',
  styleUrls: ['./mlb.component.css'],
})
export class MlbComponent {
  constructor() {}

  /** League Filters */
  americanLeagueFilterSelected = true;
  nationalLeagueFilterSelected = true;

  americanLeagueDivisionFiltersSelectable = true;
  nationalLeagueDivisionFiltersSelectable = true;

  /** Division Filters */
  alEastDivisionFilterSelected = true;
  alCentralDivisionFilterSelected = true;
  alWestDivisionFilterSelected = true;

  nlEastDivisionFilterSelected = true;
  nlCentralDivisionFilterSelected = true;
  nlWestDivisionFilterSelected = true;

  displayFilterOverlay = false;

  mapView = true;

  iconMap = this.getIconMap();

  getMlbTeamDetails() {
    const selectedLeagues = this.getSelectedLeagues();
    const selectedDivisions = this.getSelectedDivisions();

    const filteredMlbTeams = mlbTeamDetails.filter((team) => {
      return (
        selectedLeagues.includes(team.league as any) &&
        selectedDivisions.includes(team.division as any)
      );
    });
    return filteredMlbTeams;
  }

  onAmericanLeagueFilterChanged(value: boolean) {
    this.americanLeagueFilterSelected = value;

    if (this.americanLeagueFilterSelected) {
      this.alEastDivisionFilterSelected = true;
      this.alCentralDivisionFilterSelected = true;
      this.alWestDivisionFilterSelected = true;

      this.americanLeagueDivisionFiltersSelectable = true;
    } else {
      this.alEastDivisionFilterSelected = false;
      this.alCentralDivisionFilterSelected = false;
      this.alWestDivisionFilterSelected = false;

      this.americanLeagueDivisionFiltersSelectable = false;
    }
  }

  onNationalLeagueFilterChanged(value: boolean) {
    this.nationalLeagueFilterSelected = value;

    if (this.nationalLeagueFilterSelected) {
      this.nlEastDivisionFilterSelected = true;
      this.nlCentralDivisionFilterSelected = true;
      this.nlWestDivisionFilterSelected = true;

      this.nationalLeagueDivisionFiltersSelectable = true;
    } else {
      this.nlEastDivisionFilterSelected = false;
      this.nlCentralDivisionFilterSelected = false;
      this.nlWestDivisionFilterSelected = false;

      this.nationalLeagueDivisionFiltersSelectable = false;
    }
  }

  onALEastDivisionFilterChanged(value: boolean) {
    this.alEastDivisionFilterSelected = value;
  }

  onALCentralDivisionFilterChanged(value: boolean) {
    this.alCentralDivisionFilterSelected = value;
  }

  onALWestDivisionFilterChanged(value: boolean) {
    this.alWestDivisionFilterSelected = value;
  }

  onNLEastDivisionFilterChanged(value: boolean) {
    this.nlEastDivisionFilterSelected = value;
  }

  onNLCentralDivisionFilterChanged(value: boolean) {
    this.nlCentralDivisionFilterSelected = value;
  }

  onNLWestDivisionFilterChanged(value: boolean) {
    this.nlWestDivisionFilterSelected = value;
  }

  onMapViewChanged(value: boolean) {
    this.mapView = value;
  }

  private getSelectedLeagues() {
    const getSelectedLeagues = [];

    if (this.americanLeagueFilterSelected) {
      getSelectedLeagues.push(MlbLeague.American);
    }

    if (this.nationalLeagueFilterSelected) {
      getSelectedLeagues.push(MlbLeague.National);
    }

    return getSelectedLeagues;
  }

  private getSelectedDivisions() {
    const selectedDivisions: string[] = [];

    if (this.alEastDivisionFilterSelected) {
      selectedDivisions.push(MlbDivision.ALEast);
    }

    if (this.alCentralDivisionFilterSelected) {
      selectedDivisions.push(MlbDivision.ALCentral);
    }

    if (this.alWestDivisionFilterSelected) {
      selectedDivisions.push(MlbDivision.ALWest);
    }

    if (this.nlEastDivisionFilterSelected) {
      selectedDivisions.push(MlbDivision.NLEast);
    }

    if (this.nlCentralDivisionFilterSelected) {
      selectedDivisions.push(MlbDivision.NLCentral);
    }

    if (this.nlWestDivisionFilterSelected) {
      selectedDivisions.push(MlbDivision.NLWest);
    }

    return selectedDivisions;
  }

  private getIconMap() {
    const iconMap = new Map();

    for (const team of mlbTeamDetails) {
      iconMap.set(team.abbreviation, {
        url: `../../assets/baseball/mlb/svg/${team.icon.svgTitle}.svg`,
        scaledSize: {
          width: 60,
          height: 60,
        },
      });
    }

    return iconMap;
  }
}
