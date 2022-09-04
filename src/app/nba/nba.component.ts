import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import {
  NbaConference,
  NbaDivision,
} from '../../assets/basketball/nba/enums/nba-enum';
import { nbaTeamDetails } from '../../assets/basketball/nba/team-details/nba-team-details';
import { TeamDetails } from '../../assets/shared/interfaces/team-details-interface';
import { nbaSchedule2022to2023 } from '../../assets/basketball/nba/schedule/nba-schedule-2022-2023';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css'],
})
export class NbaComponent {
  /**
   * Map View Type
   */
  scheduleMapView = true;
  teamsMapView = false;

  /** Offseason View */
  scheduleMapViewAvailable = true;

  /**
   * Filters
   */
  displayFilterOverlay = false;

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

  /** Date Filter */
  seasonStartDate = new Date('January 1, 2000');
  seasonEndDate = new Date('January 1, 2000');

  filterDate = this.getDefaultFilterDate();
  initialDefaultFilterDate = new FormControl(this.filterDate);

  /**
   * Icon Maps
   */
  iconObjectMap = this.getIconObjectMap();
  iconPathMap = this.getIconPathMap();

  /**
   * Schedule
   */
  nbaSchedule = this.getNbaScheduleWithGameLocation();

  onScheduleMapViewSelected() {
    this.scheduleMapView = true;
    this.teamsMapView = false;
  }

  onTeamsMapViewSelected() {
    this.teamsMapView = true;
    this.scheduleMapView = false;
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

  onSelectedDateChanged($event: any) {
    const selectedDate = new Date($event.target.value);

    this.filterDate = selectedDate;

    this.nbaSchedule = this.getNbaScheduleWithGameLocation();
  }

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

  getNbaScheduleWithGameLocation() {
    const filterDateString = this.convertDateToStringFormat(this.filterDate);

    const nbaTeamHashMap = this.createNbaTeamHashMapByName();
    const gamesForASpecificDate = this.getGamesByDate(filterDateString);

    const getNbaScheduleWithGameLocation = [];
    for (const game of gamesForASpecificDate) {
      const homeTeamData: TeamDetails = nbaTeamHashMap.get(
        game.homeTeam
      ) as TeamDetails;

      const awayTeamData: TeamDetails = nbaTeamHashMap.get(
        game.awayTeam
      ) as TeamDetails;

      if (homeTeamData === undefined || awayTeamData === undefined) {
        throw new Error('homeTeamData/awayTeamData is undefined');
      }

      getNbaScheduleWithGameLocation.push({
        gameTime: game.time,
        gameVenueName:
          game?.specialVenueDetails?.name ?? homeTeamData.venue.name,
        gameVenueAddress:
          game?.specialVenueDetails?.address ?? homeTeamData.venue.address,
        gameVenueLatitude:
          game?.specialVenueDetails?.latitude ?? homeTeamData.venue.latitude,
        gameVenueLongitude:
          game?.specialVenueDetails?.longitude ?? homeTeamData.venue.longitude,

        homeTeam: homeTeamData.name,
        homeTeamAbbreviation: homeTeamData.abbreviation,
        awayTeam: awayTeamData.name,
        awayTeamAbbreviation: awayTeamData.abbreviation,
      });
    }

    return getNbaScheduleWithGameLocation;
  }

  private getDefaultFilterDate(): Date {
    const todaysDate = new Date();

    this.filterDate = todaysDate;

    if (todaysDate <= this.seasonStartDate) {
      this.filterDate = this.seasonStartDate;
    } else if (
      todaysDate >= this.seasonStartDate &&
      todaysDate <= this.seasonEndDate
    ) {
      this.filterDate = todaysDate;
    } else if (todaysDate >= this.seasonEndDate) {
      this.filterDate = this.seasonEndDate;
    }

    return this.filterDate;
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

  private getIconObjectMap() {
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

  private getIconPathMap() {
    const iconMap = new Map();

    for (const team of nbaTeamDetails) {
      iconMap.set(
        team.abbreviation,
        `../../assets/basketball/nba/svg/${team.icon.svgTitle}.svg`
      );
    }

    return iconMap;
  }

  private createNbaTeamHashMapByName() {
    const teamMap = new Map<string, TeamDetails>();

    for (const team of nbaTeamDetails) {
      teamMap.set(team.name, team);
    }

    return teamMap;
  }

  private getGamesByDate(selectedDate: string) {
    const games = nbaSchedule2022to2023.filter((game) => {
      return game.date === selectedDate;
    });

    return games;
  }

  private convertDateToStringFormat(date: Date) {
    /** Year */
    const dateYear = date.getFullYear().toString();

    /** Month */
    const dateMonthNumeric = date.getMonth() + 1;

    let dateMonth = dateMonthNumeric.toString();
    if (dateMonth.length === 1) {
      dateMonth = `0${dateMonth}`;
    }

    /** Day */
    let dateDay = date.getDate().toString();

    if (dateDay.length === 1) {
      dateDay = `0${dateDay}`;
    }

    const dateString = `${dateYear}-${dateMonth}-${dateDay}`;

    return dateString;
  }
}
