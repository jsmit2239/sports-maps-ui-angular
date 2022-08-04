import { Component, OnInit } from '@angular/core';
import {
  NbaConference,
  NbaDivision,
} from 'src/assets/basketball/nba/enums/nba-enum';
import { nbaTeamDetails } from 'src/assets/basketball/nba/team-details/nba-team-details';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css'],
})
export class NbaComponent {
  constructor() {}

  /** Conference Filters */
  easternConferenceFilterSelected = true;
  westernConferenceFilterSelected = true;

  easternConferenceDivisionFiltersSelectable = true;
  westernConferenceDivisionFiltersSelectable = true;

  /** Division Filters */
  atlanticDivisionFilterSelected = true;
  centralDivisionFilterSelected = true;
  southeastDivisionFilterSelected = true;

  northwestDivisionFilterSelected = true;
  pacificDivisionFilterSelected = true;
  southwestDivisionFilterSelected = true;

  displayFilterOverlay = false;

  mapView = true;

  iconMap = this.getIconMap();

  getNbaTeamDetails() {
    const selectedConferences = this.getSelectedConferences();
    const selectedDivisions = this.getSelectedDivisions();

    const filteredNbaTeams = nbaTeamDetails.filter((team) => {
      return (
        selectedConferences.includes(team.conference as any) &&
        selectedDivisions.includes(team.division as any)
      );
    });
    return filteredNbaTeams;
  }

  onEasternConferenceFilterChanged(value: boolean) {
    this.easternConferenceFilterSelected = value;

    if (this.easternConferenceFilterSelected) {
      this.atlanticDivisionFilterSelected = true;
      this.centralDivisionFilterSelected = true;
      this.southeastDivisionFilterSelected = true;

      this.easternConferenceDivisionFiltersSelectable = true;
    } else {
      this.atlanticDivisionFilterSelected = false;
      this.centralDivisionFilterSelected = false;
      this.southeastDivisionFilterSelected = false;

      this.easternConferenceDivisionFiltersSelectable = false;
    }
  }

  onWesternConferenceFilterChanged(value: boolean) {
    this.westernConferenceFilterSelected = value;

    if (this.westernConferenceFilterSelected) {
      this.northwestDivisionFilterSelected = true;
      this.pacificDivisionFilterSelected = true;
      this.southwestDivisionFilterSelected = true;

      this.westernConferenceDivisionFiltersSelectable = true;
    } else {
      this.northwestDivisionFilterSelected = false;
      this.pacificDivisionFilterSelected = false;
      this.southwestDivisionFilterSelected = false;

      this.westernConferenceDivisionFiltersSelectable = false;
    }
  }

  onAtlanticDivisionFilterChanged(value: boolean) {
    this.atlanticDivisionFilterSelected = value;
  }

  onCentralDivisionFilterChanged(value: boolean) {
    this.centralDivisionFilterSelected = value;
  }

  onSoutheastDivisionFilterChanged(value: boolean) {
    this.southeastDivisionFilterSelected = value;
  }

  onNorthwestDivisionFilterChanged(value: boolean) {
    this.northwestDivisionFilterSelected = value;
  }

  onPacificDivisionFilterChanged(value: boolean) {
    this.pacificDivisionFilterSelected = value;
  }

  onSouthwestDivisionFilterChanged(value: boolean) {
    this.southwestDivisionFilterSelected = value;
  }

  onMapViewChanged(value: boolean) {
    this.mapView = value;
  }

  private getSelectedConferences() {
    const selectedConferences = [];

    if (this.easternConferenceFilterSelected) {
      selectedConferences.push(NbaConference.Eastern);
    }

    if (this.westernConferenceFilterSelected) {
      selectedConferences.push(NbaConference.Western);
    }

    return selectedConferences;
  }

  private getSelectedDivisions() {
    const selectedDivisions: string[] = [];

    if (this.atlanticDivisionFilterSelected) {
      selectedDivisions.push(NbaDivision.Atlantic);
    }

    if (this.centralDivisionFilterSelected) {
      selectedDivisions.push(NbaDivision.Central);
    }

    if (this.southeastDivisionFilterSelected) {
      selectedDivisions.push(NbaDivision.Southeast);
    }

    if (this.northwestDivisionFilterSelected) {
      selectedDivisions.push(NbaDivision.Northwest);
    }

    if (this.pacificDivisionFilterSelected) {
      selectedDivisions.push(NbaDivision.Pacific);
    }

    if (this.southwestDivisionFilterSelected) {
      selectedDivisions.push(NbaDivision.Southwest);
    }

    return selectedDivisions;
  }

  private getIconMap() {
    const iconMap = new Map();

    for (const team of nbaTeamDetails) {
      iconMap.set(team.abbreviation, {
        url: `../../assets/basketball/nba/svg/${team.icon.svgTitle}.svg`,
        scaledSize: {
          width: 60,
          height: 60,
        },
      });
    }

    return iconMap;
  }
}
