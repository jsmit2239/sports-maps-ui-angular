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

  teamDetails = nhlTeamDetails;

  /** Conference Filters */
  easternConferenceFilter = false;
  westernConferenceFilter = false;

  /** Division Filters */
  atlanticDivisionFilter = false;
  centralDivisionFilter = false;
  metropolitanDivisionFilter = false;
  pacificDivisionFilter = false;

  mapView = true;

  iconMap = this.getIconMap();

  getNhlTeamDetails() {
    const conferenceFiltersEnabled = this.areConferenceFiltersEnabled();
    if (!conferenceFiltersEnabled) {
      return nhlTeamDetails;
    } else {
      const selectedConferences = this.getSelectedConferences();
      const selectedDivisions = this.getSelectedDivisions();

      const filteredNhlTeams = nhlTeamDetails.filter((team) => {
        return (
          selectedConferences.includes(team.conference) &&
          selectedDivisions.includes(team.division)
        );
      });
      return filteredNhlTeams;
    }
  }

  onEasternConferenceFilterChanged(value: boolean) {
    this.easternConferenceFilter = value;

    /**
     * If the eastern conference filter has been enabled, make sure the corresponding
     * division filters have also been enabled.
     *
     * If the eastern conference filter has been disabled, make sure the corresponding
     * division filters have also been disabled.
     *
     * - atlanticDivisionFilter
     * - metropolitanDivisionFilter
     */
    if (this.easternConferenceFilter) {
      this.atlanticDivisionFilter = true;
      this.metropolitanDivisionFilter = true;
    } else {
      this.atlanticDivisionFilter = false;
      this.metropolitanDivisionFilter = false;
    }
  }

  onWesternConferenceFilterChanged(value: boolean) {
    this.westernConferenceFilter = value;

    /**
     * If the western conference filter has been enabled, make sure the corresponding
     * division filters have also been enabled.
     *
     * If the western conference filter has been disabled, make sure the corresponding
     * division filters have also been disabled.
     *
     * - centralDivisionFilter
     * - pacificDivisionFilter
     */
    if (this.westernConferenceFilter) {
      this.centralDivisionFilter = true;
      this.pacificDivisionFilter = true;
    } else {
      this.centralDivisionFilter = false;
      this.pacificDivisionFilter = false;
    }
  }

  onAtlanticDivisionFilterChanged(value: boolean) {
    /**
     * If the eastern conference filter is not enabled, do not allow
     * this value to be set
     */
    if (this.easternConferenceFilter) {
      this.atlanticDivisionFilter = value;
    }
  }

  onCentralDivisionFilterChanged(value: boolean) {
    /**
     * If the western conference filter is not enabled, do not allow
     * this value to be set
     */
    if (this.westernConferenceFilter) {
      this.centralDivisionFilter = value;
    }
  }

  onMetropolitanDivisionFilterChanged(value: boolean) {
    /**
     * If the eastern conference filter is not enabled, do not allow
     * this value to be set
     */
    if (this.easternConferenceFilter) {
      this.metropolitanDivisionFilter = value;
    }
  }

  onPacificDivisionFilterChanged(value: boolean) {
    /**
     * If the western conference filter is not enabled, do not allow
     * this value to be set
     */
    if (this.westernConferenceFilter) {
      this.pacificDivisionFilter = value;
    }
  }

  onMapViewChanged(value: boolean) {
    this.mapView = value;
  }

  private areConferenceFiltersEnabled(): boolean {
    return this.easternConferenceFilter || this.westernConferenceFilter;
  }

  private getSelectedConferences() {
    const selectedConferences: string[] = [];

    if (this.easternConferenceFilter) {
      selectedConferences.push(NhlConference.Eastern);
    }

    if (this.westernConferenceFilter) {
      selectedConferences.push(NhlConference.Western);
    }

    return selectedConferences;
  }

  private getSelectedDivisions() {
    const selectedDivisions: string[] = [];

    if (this.atlanticDivisionFilter) {
      selectedDivisions.push(NhlDivision.Atlantic);
    }

    if (this.centralDivisionFilter) {
      selectedDivisions.push(NhlDivision.Central);
    }

    if (this.metropolitanDivisionFilter) {
      selectedDivisions.push(NhlDivision.Metropolitan);
    }

    if (this.pacificDivisionFilter) {
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
