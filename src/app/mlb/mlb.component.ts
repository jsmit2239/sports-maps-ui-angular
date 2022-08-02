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

  /** League Filter */
  americanLeagueFilter = false;
  nationalLeagueFilter = false;

  /** Division Filter */
  alEastDivisionFilter = false;
  alCentralDivisionFilter = false;
  alWestDivisionFilter = false;

  nlEastDivisionFilter = false;
  nlCentralDivisionFilter = false;
  nlWestDivisionFilter = false;

  mapView = true;

  iconMap = this.getIconMap();

  getMlbTeamDetails() {
    const leagueFiltersEnabled = this.areLeagueFiltersEnabled();
    if (!leagueFiltersEnabled) {
      return mlbTeamDetails;
    } else {
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
  }

  onAmericanLeagueFilterChanged(value: boolean) {
    this.americanLeagueFilter = value;

    /**
     * If the american league filter has been enabled, make sure the corresponding
     * division filters have also been enabled.
     *
     * If the american league filter has been disabled, make sure the corresponding
     * division filters have also been disabled.
     *
     * - alEastDivisionFilter
     * - alCentralDivisionFilter
     * - alWestDivisionFilter
     */
    if (this.americanLeagueFilter) {
      this.alEastDivisionFilter = true;
      this.alCentralDivisionFilter = true;
      this.alWestDivisionFilter = true;
    } else {
      this.alEastDivisionFilter = false;
      this.alCentralDivisionFilter = false;
      this.alWestDivisionFilter = false;
    }
  }

  onNationalLeagueFilterChanged(value: boolean) {
    this.nationalLeagueFilter = value;

    /**
     * If the national league filter has been enabled, make sure the corresponding
     * division filters have also been enabled.
     *
     * If the national league filter has been disabled, make sure the corresponding
     * division filters have also been disabled.
     *
     * - nlEastDivisionFilter
     * - nlCentralDivisionFilter
     * - nlWestDivisionFilter
     */
    if (this.nationalLeagueFilter) {
      this.nlEastDivisionFilter = true;
      this.nlCentralDivisionFilter = true;
      this.nlWestDivisionFilter = true;
    } else {
      this.nlEastDivisionFilter = false;
      this.nlCentralDivisionFilter = false;
      this.nlWestDivisionFilter = false;
    }
  }

  onALEastDivisionFilterChanged(value: boolean) {
    /**
     * If the american league filter is not enabled, do not allow
     * this value to be set
     */
    if (this.americanLeagueFilter) {
      this.alEastDivisionFilter = value;
    }
  }

  onALCentralDivisionFilterChanged(value: boolean) {
    /**
     * If the american league filter is not enabled, do not allow
     * this value to be set
     */
    if (this.americanLeagueFilter) {
      this.alCentralDivisionFilter = value;
    }
  }

  onALWestDivisionFilterChanged(value: boolean) {
    /**
     * If the american league filter is not enabled, do not allow
     * this value to be set
     */
    if (this.americanLeagueFilter) {
      this.alWestDivisionFilter = value;
    }
  }

  onNLEastDivisionFilterChanged(value: boolean) {
    /**
     * If the national league filter is not enabled, do not allow
     * this value to be set
     */
    if (this.nationalLeagueFilter) {
      this.nlEastDivisionFilter = value;
    }
  }

  onNLCentralDivisionFilterChanged(value: boolean) {
    /**
     * If the national league filter is not enabled, do not allow
     * this value to be set
     */
    if (this.nationalLeagueFilter) {
      this.nlCentralDivisionFilter = value;
    }
  }

  onNLWestDivisionFilterChanged(value: boolean) {
    /**
     * If the national league filter is not enabled, do not allow
     * this value to be set
     */
    if (this.nationalLeagueFilter) {
      this.nlWestDivisionFilter = value;
    }
  }

  onMapViewChanged(value: boolean) {
    this.mapView = value;
  }

  private areLeagueFiltersEnabled(): boolean {
    return this.americanLeagueFilter || this.nationalLeagueFilter;
  }

  private getSelectedLeagues() {
    const getSelectedLeagues = [];

    if (this.americanLeagueFilter) {
      getSelectedLeagues.push(MlbLeague.American);
    }

    if (this.nationalLeagueFilter) {
      getSelectedLeagues.push(MlbLeague.National);
    }

    return getSelectedLeagues;
  }

  private getSelectedDivisions() {
    const selectedDivisions: string[] = [];

    if (this.alEastDivisionFilter) {
      selectedDivisions.push(MlbDivision.ALEast);
    }

    if (this.alCentralDivisionFilter) {
      selectedDivisions.push(MlbDivision.ALCentral);
    }

    if (this.alWestDivisionFilter) {
      selectedDivisions.push(MlbDivision.ALWest);
    }

    if (this.nlEastDivisionFilter) {
      selectedDivisions.push(MlbDivision.NLEast);
    }

    if (this.nlCentralDivisionFilter) {
      selectedDivisions.push(MlbDivision.NLCentral);
    }

    if (this.nlWestDivisionFilter) {
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
