import { Component } from '@angular/core';
import { ahlTeamDetails } from 'src/assets/hockey/ahl/team-details/ahl-team-details';

@Component({
  selector: 'app-ahl',
  templateUrl: './ahl.component.html',
  styleUrls: ['./ahl.component.css'],
})
export class AhlComponent {
  constructor() {}

  displayFilterOverlay = false;

  mapView = true;

  iconMap = this.getIconMap();

  getAhlTeamDetails() {
    return ahlTeamDetails;
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

    for (const team of ahlTeamDetails) {
      iconMap.set(team.abbreviation, {
        url: `../../assets/hockey/nhl/svg/detroit-red-wings-logo.svg`,
        scaledSize: {
          width: 60,
          height: 60,
        },
      });
    }

    return iconMap;
  }
}
