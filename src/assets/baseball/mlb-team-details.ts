export interface TeamDetails {
  abbreviation?: string;
  name?: string;
  venue?: VenueDetails;
  league: MlbLeague;
  division: string;
}

export interface VenueDetails {
  name: string;
  address: string;
  timeZone?: string;
}

export enum MlbLeague {
  American = 'AMERICAN',
  National = 'NATIONAL',
}

export enum MlbDivision {
  ALEast = 'AL_EAST',
  ALCentral = 'AL_CENTRAL',
  ALWest = 'AL_WEST',
  NLEast = 'NL_EAST',
  NLCentral = 'NL_CENTRAL',
  NLWest = 'NL_WEST',
}

const nlEastTeamDetails: TeamDetails[] = [
  {
    name: 'Atlanta Braves',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
  },
  {
    name: 'Miami Marlins',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
  },
  {
    name: 'New York Mets',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
  },
  {
    name: 'Philadelphia Phillies',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
  },
  {
    name: 'Washington Nationals',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
  },
];

const nlCentralTeamDetails: TeamDetails[] = [
  {
    name: 'Chicago Cubs',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
  },
  {
    name: 'Cincinnati Reds',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
  },
  {
    name: 'Milwaukee Brewers',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
  },
  {
    name: 'Pittsburgh Pirates',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
  },
  {
    name: 'Washington Nationals',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
  },
];

const nlWestTeamDetails: TeamDetails[] = [
  {
    name: 'Arizona Diamondbacks',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
  },
  {
    name: 'Colorado Rockies',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
  },
  {
    name: 'Los Angeles Dodgers',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
  },
  {
    name: 'San Diego Padres',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
  },
  {
    name: 'San Francisco Giants',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
  },
];

const alEastTeamDetails: TeamDetails[] = [
  {
    name: 'Baltimore Orioles',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
  },
  {
    name: 'Boston Red Sox',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
  },
  {
    name: 'New York Yankees',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
  },
  {
    name: 'Tampa Bay Rays',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
  },
  {
    name: 'Toronto Blue Jays',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
  },
];

const alCentralTeamDetails: TeamDetails[] = [
  {
    name: 'Chicago White Sox',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
  },
  {
    name: 'Cleveland Guardians',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
  },
  {
    name: 'Detroit Tigers',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
  },
  {
    name: 'Kansas City Royals',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
  },
  {
    name: 'Minnesota Twins',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
  },
];

const alWestTeamDetails: TeamDetails[] = [
  {
    name: 'Houston Astros',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
  },
  {
    name: 'Los Angeles Angels',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
  },
  {
    name: 'Oakland Athletics',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
  },
  {
    name: 'Seattle Mariners',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
  },
  {
    name: 'Texas Rangers',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
  },
];

export const mlbTeamDetails: TeamDetails[] = [
  ...nlEastTeamDetails,
  ...nlCentralTeamDetails,
  ...nlWestTeamDetails,
  ...alEastTeamDetails,
  ...alCentralTeamDetails,
  ...alWestTeamDetails,
];
