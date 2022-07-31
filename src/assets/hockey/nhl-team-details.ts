export interface TeamDetails {
  abbreviation?: string;
  name?: string;
  venue?: VenueDetails;
  conference: NhlConference;
  division: string;
}

export interface VenueDetails {
  name: string;
  address: string;
  timeZone?: string;
}

export enum NhlConference {
  Eastern = 'EASTERN',
  Western = 'WESTERN',
}

export enum NhlDivision {
  Atlantic = 'ATLANTIC',
  Central = 'CENTRAL',
  Metropolitan = 'METROPOLITAN',
  Pacific = 'PACIFIC',
}

const easternConferenceAtlanticDivisionTeamDetails: TeamDetails[] = [
  {
    name: 'Boston Bruins',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
  },
  {
    name: 'Buffalo Sabres',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
  },
  {
    name: 'Detroit Red Wings',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
  },
  {
    name: 'Florida Panthers',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
  },
  {
    name: 'Montreal Canadiens',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
  },
  {
    name: 'Ottawa Senators',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
  },
  {
    name: 'Tampa Bay Lightning',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
  },
  {
    name: 'Toronto Maple Leafs',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
  },
];

const easternConferenceMetropolitanDivisionTeamDetails: TeamDetails[] = [
  {
    name: 'Carolina Hurricanes',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
  },
  {
    name: 'Columbus Blue Jackets',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
  },
  {
    name: 'New Jersey Devils',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
  },
  {
    name: 'New York Islanders',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
  },
  {
    name: 'New York Rangers',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
  },
  {
    name: 'Philadelphia Flyers',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
  },
  {
    name: 'Pittsburgh Penguins',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
  },
  {
    name: 'Washington Capitals',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
  },
];

const westernConferenceCentralDivisionTeamDetails: TeamDetails[] = [
  {
    name: 'Arizona Coyotes',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
  },
  {
    name: 'Chicago Blackhawks',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
  },
  {
    name: 'Colorado Avalanche',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
  },
  {
    name: 'Dallas Stars',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
  },
  {
    name: 'Minnesota Wild',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
  },
  {
    name: 'Nashville Predators',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
  },
  {
    name: 'St.Louis Blues',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
  },
  {
    name: 'Winnipeg Jets',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
  },
];

const westernConferencePacificDivisionTeamDetails: TeamDetails[] = [
  {
    name: 'Anaheim Ducks',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
  },
  {
    name: 'Calgary Flames',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
  },
  {
    name: 'Edmonton Oilers',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
  },
  {
    name: 'Los Angeles Kings',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
  },
  {
    name: 'San Jose Sharks',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
  },
  {
    name: 'Seattle Kraken',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
  },
  {
    name: 'Vancouver Canucks',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
  },
  {
    name: 'Las Vegas Golden Knights',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
  },
];

export const nhlTeamDetails: TeamDetails[] = [
  ...easternConferenceAtlanticDivisionTeamDetails,
  ...easternConferenceMetropolitanDivisionTeamDetails,
  ...westernConferenceCentralDivisionTeamDetails,
  ...westernConferencePacificDivisionTeamDetails,
];
