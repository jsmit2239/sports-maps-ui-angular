import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  NhlConference,
  NhlDivision,
} from '../../assets/hockey/nhl/enums/nhl-enum';
import { nhlSchedule2022to2023 } from '../../assets/hockey/nhl/schedule/nhl-schedule-2022-2023-v2';
import { nhlTeamDetails } from '../../assets/hockey/nhl/team-details/nhl-team-details';
import { TeamDetails } from '../../assets/shared/interfaces/team-details-interface';

@Component({
  selector: 'app-nhl',
  templateUrl: './nhl.component.html',
  styleUrls: ['./nhl.component.css'],
})
export class NhlComponent implements OnInit {
  // export class NhlComponent {
  constructor() {
    // this.filterDate = new Date();
  }

  /** Date Filter */
  seasonStartDate = new Date('October 7, 2022');
  seasonEndDate = new Date('April 13, 2023');

  filterDate = this.getDefaultFilterDate();

  initialDefaultFilterDate = new FormControl(this.filterDate);
  // selectedDateString = '2022-12-01';

  /**
   * Map View Type
   */
  scheduleMapView = true;
  teamsMapView = false;

  /**
   * Schedule
   */
  nhlSchedule = this.getNhlScheduleWithGameLocation();

  /**
   * Icon Maps
   */
  iconObjectMap = this.getIconObjectMap();
  iconPathMap = this.getIconPathMap();

  /**
   * Filters
   */
  displayFilterOverlay = false;

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

  ngOnInit(): void {
    // const todaysDate = new Date();

    this.filterDate = this.getDefaultFilterDate();

    // if (todaysDate <= this.seasonStartDate) {
    //   this.filterDate = this.seasonStartDate;
    // }

    // if (
    //   todaysDate >= this.seasonStartDate &&
    //   todaysDate <= this.seasonEndDate
    // ) {
    //   this.filterDate = todaysDate;
    // }

    // if (todaysDate >= this.seasonEndDate) {
    //   this.filterDate = this.seasonEndDate;
    // }
  }

  onScheduleMapViewSelect() {
    this.scheduleMapView = true;
    this.teamsMapView = false;
  }

  onTeamsMapViewSelect() {
    this.teamsMapView = true;
    this.scheduleMapView = false;
  }

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

  private getIconObjectMap() {
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

  getNhlScheduleWithGameLocation() {
    // const selectedDate = '2022-11-27';
    // const filter = this.filterDate;

    const filterDateString = this.convertDateToStringFormat(this.filterDate);

    const nhlTeamHashMap = this.createNhlTeamHashMapByName();
    const gamesForASpecificDate = this.getGamesByDate(filterDateString);

    const getNhlScheduleWithGameLocation = [];
    for (const game of gamesForASpecificDate) {
      const homeTeamData: TeamDetails = nhlTeamHashMap.get(
        game.homeTeam
      ) as TeamDetails;

      const awayTeamData: TeamDetails = nhlTeamHashMap.get(
        game.awayTeam
      ) as TeamDetails;

      if (homeTeamData === undefined || awayTeamData === undefined) {
        throw new Error('homeTeamData/awayTeamData is undefined');
      }

      getNhlScheduleWithGameLocation.push({
        gameTime: game.time,
        gameVenueName: homeTeamData.venue.name,
        gameVenueAddress: homeTeamData.venue.address,
        gameVenueLatitude: homeTeamData.venue.latitude,
        gameVenueLongitude: homeTeamData.venue.longitude,

        homeTeam: homeTeamData.name,
        homeTeamAbbreviation: homeTeamData.abbreviation,
        awayTeam: awayTeamData.name,
        awayTeamAbbreviation: awayTeamData.abbreviation,
      });
    }

    return getNhlScheduleWithGameLocation;
  }

  private createNhlTeamHashMapByName() {
    const teamMap = new Map<string, TeamDetails>();

    for (const team of nhlTeamDetails) {
      teamMap.set(team.name, team);
    }

    return teamMap;
  }

  private getGamesByDate(selectedDate: string) {
    const games = nhlSchedule2022to2023.filter((game) => {
      return game.date === selectedDate;
    });

    return games;
  }

  private getIconPathMap() {
    const iconMap = new Map();

    for (const team of nhlTeamDetails) {
      iconMap.set(
        team.abbreviation,
        `../../assets/hockey/nhl/svg/${team.icon.svgTitle}.svg`
      );
    }

    return iconMap;
  }

  onSelectedDateChanged($event: any) {
    const selectedDate = new Date($event.target.value);

    this.filterDate = selectedDate;

    this.nhlSchedule = this.getNhlScheduleWithGameLocation();
  }

  convertDateToStringFormat(date: Date) {
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

  getDefaultFilterDate(): Date {
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
}
