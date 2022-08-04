import { Component, OnInit } from '@angular/core';
import { nbaTeamDetails } from 'src/assets/basketball/nba/team-details/nba-team-details';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css'],
})
export class NbaComponent {
  constructor() {}

  displayFilterOverlay = false;

  mapView = true;

  iconMap = this.getIconMap();

  getNbaTeamDetails() {
    return nbaTeamDetails;
    // const leagueFiltersEnabled = this.areLeagueFiltersEnabled();
    // if (!leagueFiltersEnabled) {
    //   return mlbTeamDetails;
    // } else {
    //   const selectedLeagues = this.getSelectedLeagues();
    //   const selectedDivisions = this.getSelectedDivisions();

    //   const filteredMlbTeams = mlbTeamDetails.filter((team) => {
    //     return (
    //       selectedLeagues.includes(team.league as any) &&
    //       selectedDivisions.includes(team.division as any)
    //     );
    //   });
    //   return filteredMlbTeams;
    // }
  }

  onMapViewChanged(value: boolean) {
    this.mapView = value;
  }

  private getIconMap() {
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
}
