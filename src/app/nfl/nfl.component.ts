import { Component, OnInit } from '@angular/core';
import {
  NflConference,
  NflDivision,
} from 'src/assets/football/nfl/enums/nfl-enum';
import { nflTeamDetails } from 'src/assets/football/nfl/team-details/nfl-team-details';

@Component({
  selector: 'app-nfl',
  templateUrl: './nfl.component.html',
  styleUrls: ['./nfl.component.css'],
})
export class NflComponent {
  constructor() {}

  /** Conference Filters */
  afcConferenceFilterSelected = true;
  nfcConferenceFilterSelected = true;

  afcConferenceDivisionFiltersSelectable = true;
  nfcConferenceDivisionFiltersSelectable = true;

  /** Division Filters */
  afcNorthDivisionFilterSelected = true;
  afcSouthDivisionFilterSelected = true;
  afcEastDivisionFilterSelected = true;
  afcWestDivisionFilterSelected = true;

  nfcNorthDivisionFilterSelected = true;
  nfcSouthDivisionFilterSelected = true;
  nfcEastDivisionFilterSelected = true;
  nfcWestDivisionFilterSelected = true;

  displayFilterOverlay = false;

  mapView = true;

  iconMap = this.getIconMap();

  getNflTeamDetails() {
    const selectedConferences = this.getSelectedConferences();
    const selectedDivisions = this.getSelectedDivisions();

    const filteredNflTeams = nflTeamDetails.filter((team) => {
      return (
        selectedConferences.includes(team.conference as any) &&
        selectedDivisions.includes(team.division as any)
      );
    });
    return filteredNflTeams;
  }

  onAfcConferenceFilterChanged(value: boolean) {
    this.afcConferenceFilterSelected = value;

    if (this.afcConferenceFilterSelected) {
      this.afcNorthDivisionFilterSelected = true;
      this.afcSouthDivisionFilterSelected = true;
      this.afcEastDivisionFilterSelected = true;
      this.afcWestDivisionFilterSelected = true;

      this.afcConferenceDivisionFiltersSelectable = true;
    } else {
      this.afcNorthDivisionFilterSelected = false;
      this.afcSouthDivisionFilterSelected = false;
      this.afcEastDivisionFilterSelected = false;
      this.afcWestDivisionFilterSelected = false;

      this.afcConferenceDivisionFiltersSelectable = false;
    }
  }

  onNfcConferenceFilterChanged(value: boolean) {
    this.nfcConferenceFilterSelected = value;

    if (this.nfcConferenceFilterSelected) {
      this.nfcNorthDivisionFilterSelected = true;
      this.nfcSouthDivisionFilterSelected = true;
      this.nfcEastDivisionFilterSelected = true;
      this.nfcWestDivisionFilterSelected = true;

      this.nfcConferenceDivisionFiltersSelectable = true;
    } else {
      this.nfcNorthDivisionFilterSelected = false;
      this.nfcSouthDivisionFilterSelected = false;
      this.nfcEastDivisionFilterSelected = false;
      this.nfcWestDivisionFilterSelected = false;

      this.nfcConferenceDivisionFiltersSelectable = false;
    }
  }

  onAfcNorthDivisionFilterChanged(value: boolean) {
    this.afcNorthDivisionFilterSelected = value;
  }

  onAfcSouthDivisionFilterChanged(value: boolean) {
    this.afcSouthDivisionFilterSelected = value;
  }

  onAfcEastDivisionFilterChanged(value: boolean) {
    this.afcEastDivisionFilterSelected = value;
  }

  onAfcWestDivisionFilterChanged(value: boolean) {
    this.afcWestDivisionFilterSelected = value;
  }

  onNfcNorthDivisionFilterChanged(value: boolean) {
    this.nfcNorthDivisionFilterSelected = value;
  }

  onNfcSouthDivisionFilterChanged(value: boolean) {
    this.nfcSouthDivisionFilterSelected = value;
  }

  onNfcEastDivisionFilterChanged(value: boolean) {
    this.nfcEastDivisionFilterSelected = value;
  }

  onNfcWestDivisionFilterChanged(value: boolean) {
    this.nfcWestDivisionFilterSelected = value;
  }

  onMapViewChanged(value: boolean) {
    this.mapView = value;
  }

  private getSelectedConferences() {
    const selectedConferences = [];

    if (this.afcConferenceFilterSelected) {
      selectedConferences.push(NflConference.Afc);
    }

    if (this.nfcConferenceFilterSelected) {
      selectedConferences.push(NflConference.Nfc);
    }

    return selectedConferences;
  }

  private getSelectedDivisions() {
    const selectedDivisions: string[] = [];

    if (this.afcNorthDivisionFilterSelected) {
      selectedDivisions.push(NflDivision.AfcNorth);
    }

    if (this.afcSouthDivisionFilterSelected) {
      selectedDivisions.push(NflDivision.AfcSouth);
    }

    if (this.afcEastDivisionFilterSelected) {
      selectedDivisions.push(NflDivision.AfcEast);
    }

    if (this.afcWestDivisionFilterSelected) {
      selectedDivisions.push(NflDivision.AfcWest);
    }

    if (this.nfcNorthDivisionFilterSelected) {
      selectedDivisions.push(NflDivision.NfcNorth);
    }

    if (this.nfcSouthDivisionFilterSelected) {
      selectedDivisions.push(NflDivision.NfcSouth);
    }

    if (this.nfcEastDivisionFilterSelected) {
      selectedDivisions.push(NflDivision.NfcEast);
    }

    if (this.nfcWestDivisionFilterSelected) {
      selectedDivisions.push(NflDivision.NfcWest);
    }

    return selectedDivisions;
  }
  private getIconMap() {
    const iconMap = new Map();

    for (const team of nflTeamDetails) {
      iconMap.set(team.abbreviation, {
        url: `../../assets/football/nfl/svg/${team.icon.svgTitle}.svg`,
        scaledSize: {
          width: 60,
          height: 60,
        },
      });
    }

    return iconMap;
  }
}
