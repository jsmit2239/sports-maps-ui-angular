import { Component } from '@angular/core';
import {
  NhlConference,
  NhlDivision,
} from 'src/assets/hockey/nhl/enums/nhl-enum';
import { nhlTeamDetails } from 'src/assets/hockey/nhl/team-details/nhl-team-details';

@Component({
  selector: 'app-nhl',
  templateUrl: './nhl.component.html',
  styleUrls: ['./nhl.component.css'],
})
export class NhlComponent {
  constructor() {}

  /** Conference Filters */
  easternConferenceFilterSelected = true;
  westernConferenceFilterSelected = true;

  easternConferenceDivisionFilterSelectable = true;
  westernConferenceDivisionFilterSelectable = true;

  /** Division Filters */
  atlanticDivisionFilterSelected = true;
  centralDivisionFilterSelected = true;
  metropolitanDivisionFilterSelected = true;
  pacificDivisionFilterSelected = true;

  displayFilterOverlay = false;

  mapView = true;

  iconMap = this.getIconMap();

  getNhlTeamDetails() {
    const selectedConferences = this.getSelectedConferences();
    const selectedDivisions = this.getSelectedDivisions();

    const filteredNhlTeams = nhlTeamDetails.filter((team) => {
      return (
        selectedConferences.includes(team.conference as any) &&
        selectedDivisions.includes(team.division as any)
      );
    });
    return filteredNhlTeams;
  }

  onEasternConferenceFilterChanged(value: boolean) {
    this.easternConferenceFilterSelected = value;

    if (this.easternConferenceFilterSelected) {
      this.atlanticDivisionFilterSelected = true;
      this.metropolitanDivisionFilterSelected = true;

      this.easternConferenceDivisionFilterSelectable = true;
    } else {
      this.atlanticDivisionFilterSelected = false;
      this.metropolitanDivisionFilterSelected = false;

      this.easternConferenceDivisionFilterSelectable = false;
    }
  }

  onWesternConferenceFilterChanged(value: boolean) {
    this.westernConferenceFilterSelected = value;

    if (this.westernConferenceFilterSelected) {
      this.centralDivisionFilterSelected = true;
      this.pacificDivisionFilterSelected = true;

      this.westernConferenceDivisionFilterSelectable = true;
    } else {
      this.centralDivisionFilterSelected = false;
      this.pacificDivisionFilterSelected = false;

      this.westernConferenceDivisionFilterSelectable = false;
    }
  }

  onAtlanticDivisionFilterChanged(value: boolean) {
    this.atlanticDivisionFilterSelected = value;
  }

  onCentralDivisionFilterChanged(value: boolean) {
    this.centralDivisionFilterSelected = value;
  }

  onMetropolitanDivisionFilterChanged(value: boolean) {
    this.metropolitanDivisionFilterSelected = value;
  }

  onPacificDivisionFilterChanged(value: boolean) {
    this.pacificDivisionFilterSelected = value;
  }

  onMapViewChanged(value: boolean) {
    this.mapView = value;
  }

  private getSelectedConferences() {
    const selectedConferences = [];

    if (this.easternConferenceFilterSelected) {
      selectedConferences.push(NhlConference.Eastern);
    }

    if (this.westernConferenceFilterSelected) {
      selectedConferences.push(NhlConference.Western);
    }

    return selectedConferences;
  }

  private getSelectedDivisions() {
    const selectedDivisions = [];

    if (this.atlanticDivisionFilterSelected) {
      selectedDivisions.push(NhlDivision.Atlantic);
    }

    if (this.centralDivisionFilterSelected) {
      selectedDivisions.push(NhlDivision.Central);
    }

    if (this.metropolitanDivisionFilterSelected) {
      selectedDivisions.push(NhlDivision.Metropolitan);
    }

    if (this.pacificDivisionFilterSelected) {
      selectedDivisions.push(NhlDivision.Pacific);
    }

    return selectedDivisions;
  }

  private getIconMap() {
    const iconMap = new Map();

    for (const team of nhlTeamDetails) {
      iconMap.set(team.abbreviation, {
        url: `../../assets/hockey/nhl/svg/${team.icon.svgTitle}.svg`,
        scaledSize: {
          width: 60,
          height: 60,
        },
      });
    }

    return iconMap;
  }
}
