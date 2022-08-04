import { Component } from '@angular/core';
import {
  AhlConference,
  AhlDivision,
} from 'src/assets/hockey/ahl/enums/ahl-enum';
import { ahlTeamDetails } from 'src/assets/hockey/ahl/team-details/ahl-team-details';

@Component({
  selector: 'app-ahl',
  templateUrl: './ahl.component.html',
  styleUrls: ['./ahl.component.css'],
})
export class AhlComponent {
  constructor() {}

  /** Conference Filters */
  easternConferenceFilterSelected = true;
  westernConferenceFilterSelected = true;

  easternConferenceDivisionFilterSelectable = true;
  westernConferenceDivisionFilterSelectable = true;

  /** Division Filters */
  atlanticDivisionFilterSelected = true;
  centralDivisionFilterSelected = true;
  northDivisionFilterSelected = true;
  pacificDivisionFilterSelected = true;

  displayFilterOverlay = false;

  mapView = true;

  iconMap = this.getIconMap();

  getAhlTeamDetails() {
    const selectedConferences = this.getSelectedConferences();
    const selectedDivisions = this.getSelectedDivisions();

    const filteredAhlTeams = ahlTeamDetails.filter((team) => {
      return (
        selectedConferences.includes(team.conference as any) &&
        selectedDivisions.includes(team.division as any)
      );
    });
    return filteredAhlTeams;
  }

  onEasternConferenceFilterChanged(value: boolean) {
    this.easternConferenceFilterSelected = value;

    if (this.easternConferenceFilterSelected) {
      this.atlanticDivisionFilterSelected = true;
      this.northDivisionFilterSelected = true;

      this.easternConferenceDivisionFilterSelectable = true;
    } else {
      this.atlanticDivisionFilterSelected = false;
      this.northDivisionFilterSelected = false;

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

  onNorthDivisionFilterChanged(value: boolean) {
    this.northDivisionFilterSelected = value;
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
      selectedConferences.push(AhlConference.Eastern);
    }

    if (this.westernConferenceFilterSelected) {
      selectedConferences.push(AhlConference.Western);
    }

    return selectedConferences;
  }

  private getSelectedDivisions() {
    const selectedDivisions = [];

    if (this.atlanticDivisionFilterSelected) {
      selectedDivisions.push(AhlDivision.Atlantic);
    }

    if (this.centralDivisionFilterSelected) {
      selectedDivisions.push(AhlDivision.Central);
    }

    if (this.northDivisionFilterSelected) {
      selectedDivisions.push(AhlDivision.North);
    }

    if (this.pacificDivisionFilterSelected) {
      selectedDivisions.push(AhlDivision.Pacific);
    }

    return selectedDivisions;
  }

  private getIconMap() {
    const iconMap = new Map();

    for (const team of ahlTeamDetails) {
      iconMap.set(team.abbreviation, {
        url: `../../assets/hockey/ahl/svg/grand-rapids-griffins-logo.png`,
        scaledSize: {
          width: 60,
          height: 60,
        },
      });
    }

    return iconMap;
  }
}
