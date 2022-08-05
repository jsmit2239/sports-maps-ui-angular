import { Component } from '@angular/core';
import { nhlSchedule } from 'src/assets/hockey/nhl/schedule/nhl-schedule-2022-2023';
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
    const nhlTeamMap = this.createNhlTeamMapByName();

    const getNhlScheduleWithGameLocation = [];

    for (const game of nhlSchedule) {
      const homeTeamData: TeamDetails = nhlTeamMap.get(
        game.homeTeam
      ) as TeamDetails;

      const awayTeamData: TeamDetails = nhlTeamMap.get(
        game.awayTeam
      ) as TeamDetails;

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

  private createNhlTeamMapByName() {
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
}
