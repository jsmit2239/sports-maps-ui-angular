import { Component, OnInit } from '@angular/core';
import { nflTeamDetails } from 'src/assets/football/nfl/team-details/nfl-team-details';

@Component({
  selector: 'app-nfl',
  templateUrl: './nfl.component.html',
  styleUrls: ['./nfl.component.css'],
})
export class NflComponent {
  constructor() {}

  mapView = true;

  iconMap = this.getIconMap();

  getNflTeamDetails() {
    return nflTeamDetails;
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
}
