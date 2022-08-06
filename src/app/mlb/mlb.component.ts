import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MlbDivision,
  MlbLeague,
} from '../../assets/baseball/mlb/enums/mlb-enums';
import { mlbTeamDetails } from '../../assets/baseball/mlb/team-details/mlb-team-details';
import { mlbSchedule2022 } from '../../assets/baseball/mlb/schedule/mlb-schedule-2022';
import { TeamDetails } from '../../assets/shared/interfaces/team-details-interface';

@Component({
  selector: 'app-mlb',
  templateUrl: './mlb.component.html',
  styleUrls: ['./mlb.component.css'],
})
export class MlbComponent {
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

  /** Date Filter */
  seasonStartDate = new Date('April 7, 2022');
  seasonEndDate = new Date('October 5, 2023');

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
  mlbSchedule = this.getMlbScheduleWithGameLocation();

  onScheduleMapViewSelected() {
    this.scheduleMapView = true;
    this.teamsMapView = false;
  }

  onTeamsMapViewSelected() {
    this.teamsMapView = true;
    this.scheduleMapView = false;
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

  onSelectedDateChanged($event: any) {
    const selectedDate = new Date($event.target.value);

    this.filterDate = selectedDate;

    this.mlbSchedule = this.getMlbScheduleWithGameLocation();
  }

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

  getMlbScheduleWithGameLocation() {
    const filterDateString = this.convertDateToStringFormat(this.filterDate);

    const mlbTeamHashMap = this.createMlbTeamHashMapByName();
    const gamesForASpecificDate = this.getGamesByDate(filterDateString);

    const mlbScheduleWithGameLocation = [];
    for (const game of gamesForASpecificDate) {
      const homeTeamData: TeamDetails = mlbTeamHashMap.get(
        game.homeTeam
      ) as TeamDetails;

      const awayTeamData: TeamDetails = mlbTeamHashMap.get(
        game.awayTeam
      ) as TeamDetails;

      if (homeTeamData === undefined || awayTeamData === undefined) {
        throw new Error('homeTeamData/awayTeamData is undefined');
      }

      const gameTimesArray = this.getGameTimesArray(
        game,
        gamesForASpecificDate
      );

      if (!this.hasGameBeenPushedToArray(game, mlbScheduleWithGameLocation)) {
        mlbScheduleWithGameLocation.push({
          /** Put into array to account for double headers */
          gameTimes: gameTimesArray,
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
    }

    return mlbScheduleWithGameLocation;
  }

  private getGameTimesArray(currentGame: any, games: any[]) {
    const gameTimes = [];

    for (const game of games) {
      if (
        game.homeTeam === currentGame.homeTeam &&
        game.awayTeam === currentGame.awayTeam
      ) {
        gameTimes.push(game.time);
      }
    }

    return gameTimes;
  }

  private hasGameBeenPushedToArray(
    currentGame: any,
    mlbScheduleWithGameLocation: any[]
  ) {
    let hasGameBeenPushedToArray = false;

    for (const game of mlbScheduleWithGameLocation) {
      if (
        game.homeTeam === currentGame.homeTeam &&
        game.awayTeam === currentGame.awayTeam
      ) {
        hasGameBeenPushedToArray = true;
      }
    }

    return hasGameBeenPushedToArray;
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

  private getIconObjectMap() {
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

  private getIconPathMap() {
    const iconMap = new Map();

    for (const team of mlbTeamDetails) {
      iconMap.set(
        team.abbreviation,
        `../../assets/baseball/mlb/svg/${team.icon.svgTitle}.svg`
      );
    }

    return iconMap;
  }

  private createMlbTeamHashMapByName() {
    const teamMap = new Map<string, TeamDetails>();

    for (const team of mlbTeamDetails) {
      teamMap.set(team.name, team);
    }

    return teamMap;
  }

  private getGamesByDate(selectedDate: string) {
    const games = mlbSchedule2022.filter((game) => {
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
