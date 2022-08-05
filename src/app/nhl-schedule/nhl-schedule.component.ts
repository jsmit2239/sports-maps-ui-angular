import { Component } from '@angular/core';
import { nhlSchedule } from 'src/assets/hockey/nhl/schedule/nhl-schedule-2022-2023';
import { nhlSchedule2022to2023 } from 'src/assets/hockey/nhl/schedule/nhl-schedule-2022-2023-v2';
import { nhlTeamDetails } from 'src/assets/hockey/nhl/team-details/nhl-team-details';
import { TeamDetails } from 'src/assets/shared/interfaces/team-details-interface';

@Component({
  selector: 'app-nhl-schedule',
  templateUrl: './nhl-schedule.component.html',
  styleUrls: ['./nhl-schedule.component.css'],
})
export class NhlScheduleComponent {
  constructor() {}

  nhlSchedule = this.getNhlScheduleWithGameLocation();

  iconMap = this.getIconMap();

  getNhlScheduleWithGameLocation() {
    const selectedDate = '2022-11-26';

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

  private getIconMap() {
    const iconMap = new Map();

    for (const team of nhlTeamDetails) {
      iconMap.set(
        team.abbreviation,
        `../../assets/hockey/nhl/svg/${team.icon.svgTitle}.svg`
      );
    }

    return iconMap;
  }

  private getGamesByDate(selectedDate: string) {
    const games = nhlSchedule2022to2023.filter((game) => {
      return game.date === selectedDate;
    });

    return games;
  }
}
