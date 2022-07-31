export interface TeamDetails {
  abbreviation?: string;
  name?: string;
  // venue?: VenueDetails;
  league: MlbLeague;
  division: string;
  venue?: string;
  address?: string;
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
    venue: 'Truist Park',
    address: '755 Battery Ave SE, Atlanta, GA 30339',
  },
  {
    name: 'Miami Marlins',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
    venue: 'LoanDepot Park',
    address: '501 Marlins Way, Miami, FL 33125',
  },
  {
    name: 'New York Mets',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
    venue: 'Citi Field',
    address: '41 Seaver Way, Queens, NY 11368',
  },
  {
    name: 'Philadelphia Phillies',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
    venue: 'Citizens Bank Park',
    address: '1 Citizens Bank Way, Philadelphia, PA 19148',
  },
  {
    name: 'Washington Nationals',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
    venue: 'Nationals Park',
    address: '1500 S Capitol St SE, Washington, DC 20003',
  },
];

const nlCentralTeamDetails: TeamDetails[] = [
  {
    name: 'Chicago Cubs',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
    venue: 'Wrigley Field',
    address: '1060 W Addison St, Chicago, IL 60613',
  },
  {
    name: 'Cincinnati Reds',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
    venue: 'Great American Ball Park',
    address: '100 Joe Nuxhall Way, Cincinnati, OH 45202',
  },
  {
    name: 'Milwaukee Brewers',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
    venue: 'American Family Field',
    address: '1 Brewers Way, Milwaukee, WI 53214',
  },
  {
    name: 'Pittsburgh Pirates',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
    venue: 'PNC Park',
    address: '115 Federal St, Pittsburgh, PA 15212',
  },
  {
    name: 'Washington Nationals',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
    venue: 'Nationals Park',
    address: '1500 S Capitol St SE, Washington, DC 20003',
  },
];

const nlWestTeamDetails: TeamDetails[] = [
  {
    name: 'Arizona Diamondbacks',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
    venue: 'Chase Field',
    address: '401 E Jefferson St, Phoenix, AZ 85004',
  },
  {
    name: 'Colorado Rockies',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
    venue: 'Coors Field',
    address: '2001 Blake St, Denver, CO 80205',
  },
  {
    name: 'Los Angeles Dodgers',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
    venue: 'Dodger Stadium',
    address: '1000 Vin Scully Ave, Los Angeles, CA 90012',
  },
  {
    name: 'San Diego Padres',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
    venue: 'Petco Park',
    address: '100 Park Blvd, San Diego, CA 92101',
  },
  {
    name: 'San Francisco Giants',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
    venue: 'MetLife Stadium',
    address: '1 MetLife Stadium Dr, East Rutherford, NJ 07073',
  },
];

const alEastTeamDetails: TeamDetails[] = [
  {
    name: 'Baltimore Orioles',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
    venue: 'Oriole Park at Camden Yards',
    address: '333 W Camden St, Baltimore, MD 21201',
  },
  {
    name: 'Boston Red Sox',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
    venue: 'Fenway Park',
    address: '4 Jersey St, Boston, MA 02215',
  },
  {
    name: 'New York Yankees',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
    venue: 'Yankee Stadium',
    address: '1 E 161 St, The Bronx, NY 10451',
  },
  {
    name: 'Tampa Bay Rays',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
    venue: 'Tropicana Field',
    address: '1 Tropicana Dr., St. Petersburg, FL 33705',
  },
  {
    name: 'Toronto Blue Jays',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
    venue: 'Rogers Centre',
    address: '1 Blue Jays Way, Toronto, ON M5V 1J1, Canada',
  },
];

const alCentralTeamDetails: TeamDetails[] = [
  {
    name: 'Chicago White Sox',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
    venue: 'Guaranteed Rate Field',
    address: '333 W 35th St, Chicago, IL 60616',
  },
  {
    name: 'Cleveland Guardians',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
    venue: 'Progressive Field',
    address: '2401 Ontario St, Cleveland, OH 44115',
  },
  {
    name: 'Detroit Tigers',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
    venue: 'Comerica Park',
    address: '2100 Woodward Ave, Detroit, MI 48201',
  },
  {
    name: 'Kansas City Royals',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
    venue: 'Kauffman Stadium',
    address: '1 Royal Way, Kansas City, MO 64129',
  },
  {
    name: 'Minnesota Twins',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
    venue: 'Target Field',
    address: '1 Twins Way, Minneapolis, MN 55403',
  },
];

const alWestTeamDetails: TeamDetails[] = [
  {
    name: 'Houston Astros',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
    venue: 'Minute Maid Park',
    address: '501 Crawford St, Houston, TX 77002',
  },
  {
    name: 'Los Angeles Angels',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
    venue: 'Angel Stadium of Anaheim',
    address: '2000 E Gene Autry Way, Anaheim, CA 92806',
  },
  {
    name: 'Oakland Athletics',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
    venue: 'RingCentral Coliseum',
    address: '7000 Coliseum Way, Oakland, CA 94621',
  },
  {
    name: 'Seattle Mariners',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
    venue: 'T-Mobile Park',
    address: '1250 1st Ave S, Seattle, WA 98134',
  },
  {
    name: 'Texas Rangers',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
    venue: 'Choctaw Stadium',
    address: '1000 Ballpark Way, Arlington, TX 76011',
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
