import { Component } from '@angular/core';
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

  iconMapByAbbreviation = this.getIconMapByAbbreviation();

  nhlSchedule = this.getNhlScheduleWithGameLocation();

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  filterDate = '2022-11-26';

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

  getNhlScheduleWithGameLocation() {
    const selectedDate = '2022-11-26';

    // const selectedDate = this.filterDate as any;

    const nhlTeamHashMap = this.createNhlTeamHashMapByName();
    const gamesForASpecificDate = this.getGamesByDate(selectedDate);

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

  private getIconMapByAbbreviation() {
    const iconMap = new Map();

    for (const team of nhlTeamDetails) {
      iconMap.set(
        team.abbreviation,
        `../../assets/hockey/nhl/svg/${team.icon.svgTitle}.svg`
      );
    }

    return iconMap;
  }

  dateChanged($event: any) {
    this.filterDate = $event.target.value;

    console.log($event.target.value);
    console.log(typeof $event.target.value);
  }
}
