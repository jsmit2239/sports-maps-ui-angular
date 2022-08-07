import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  NflConference,
  NflDivision,
} from '../../assets/football/nfl/enums/nfl-enum';
import { nflSchedule2022to2023 } from '../../assets/football/nfl/schedule/nfl-schedule-2022-2023';
import { nflTeamDetails } from '../../assets/football/nfl/team-details/nfl-team-details';
import { TeamDetails } from '../../assets/shared/interfaces/team-details-interface';

@Component({
  selector: 'app-nfl',
  templateUrl: './nfl.component.html',
  styleUrls: ['./nfl.component.css'],
})
export class NflComponent {
  /**
   * Map View Type
   */
  scheduleMapView = false;
  teamsMapView = true;

  /** Offseason View */
  scheduleMapViewAvailable = true;

  /**
   * Filters
   */
  displayFilterOverlay = false;

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

  /** Date Filter */
  seasonStartDate = new Date('September 8, 2022');
  seasonEndDate = new Date('January 8, 2023');

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
  nflSchedule = this.getNflScheduleWithGameLocation();

  onScheduleMapViewSelected() {
    this.scheduleMapView = true;
    this.teamsMapView = false;
  }

  onTeamsMapViewSelected() {
    this.teamsMapView = true;
    this.scheduleMapView = false;
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

  onSelectedDateChanged($event: any) {
    const selectedDate = new Date($event.target.value);

    this.filterDate = selectedDate;

    this.nflSchedule = this.getNflScheduleWithGameLocation();
  }

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

  getNflScheduleWithGameLocation() {
    const filterDateString = this.convertDateToStringFormat(this.filterDate);

    const nflTeamHashMap = this.createNflTeamHashMapByName();
    const gamesForASpecificDate = this.getGamesByDate(filterDateString);

    const getNflScheduleWithGameLocation = [];
    for (const game of gamesForASpecificDate) {
      const homeTeamData: TeamDetails = nflTeamHashMap.get(
        game.homeTeam
      ) as TeamDetails;

      const awayTeamData: TeamDetails = nflTeamHashMap.get(
        game.awayTeam
      ) as TeamDetails;

      if (homeTeamData === undefined || awayTeamData === undefined) {
        throw new Error('homeTeamData/awayTeamData is undefined');
      }

      getNflScheduleWithGameLocation.push({
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

    return getNflScheduleWithGameLocation;
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

  private getIconObjectMap() {
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

  private getIconPathMap() {
    const iconMap = new Map();

    for (const team of nflTeamDetails) {
      iconMap.set(
        team.abbreviation,
        `../../assets/football/nfl/svg/${team.icon.svgTitle}.svg`
      );
    }

    return iconMap;
  }

  private createNflTeamHashMapByName() {
    const teamMap = new Map<string, TeamDetails>();

    for (const team of nflTeamDetails) {
      teamMap.set(team.name, team);
    }

    return teamMap;
  }

  private getGamesByDate(selectedDate: string) {
    const games = nflSchedule2022to2023.filter((game) => {
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
