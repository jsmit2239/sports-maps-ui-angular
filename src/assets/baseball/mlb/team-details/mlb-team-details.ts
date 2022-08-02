import { TeamDetails } from 'src/assets/shared/interfaces/team-details-interface';
import { MlbDivision, MlbLeague } from '../enums/mlb-enums';

const alEastTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'BAL',
    name: 'Baltimore Orioles',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
    venue: {
      name: 'Oriole Park at Camden Yards',
      address: '333 W Camden St, Baltimore, MD 21201',
      latitude: 39.28391072690935,
      longitude: -76.62168893045092,
    },
    icon: {
      svgTitle: 'baltimore-orioles-logo',
    },
  },
  {
    abbreviation: 'BOS',
    name: 'Boston Red Sox',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
    venue: {
      name: 'Fenway Park',
      address: '4 Jersey St, Boston, MA 02215',
      latitude: 42.34671404417854,
      longitude: -71.09721511933667,
    },
    icon: {
      svgTitle: 'boston-red-sox-logo',
    },
  },
  {
    abbreviation: 'NYY',
    name: 'New York Yankees',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
    venue: {
      name: 'Yankee Stadium',
      address: '1 E 161 St, The Bronx, NY 10451',
      latitude: 40.82966086560481,
      longitude: -73.92618254677231,
    },
    icon: {
      svgTitle: 'new-york-yankees-logo',
    },
  },
  {
    abbreviation: 'TB',
    name: 'Tampa Bay Rays',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
    venue: {
      name: 'Tropicana Field',
      address: '1 Tropicana Dr., St. Petersburg, FL 33705',
      latitude: 27.76835748876805,
      longitude: -82.65337064416495,
    },
    icon: {
      svgTitle: 'tampa-bay-rays-logo',
    },
  },
  {
    abbreviation: 'TOR',
    name: 'Toronto Blue Jays',
    league: MlbLeague.American,
    division: MlbDivision.ALEast,
    venue: {
      name: 'Rogers Centre',
      address: '1 Blue Jays Way, Toronto, ON M5V 1J1, Canada',
      latitude: 43.64181859962554,
      longitude: -79.38899886223284,
    },
    icon: {
      svgTitle: 'toronto-blue-jays-logo',
    },
  },
];

const alCentralTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'CWS',
    name: 'Chicago White Sox',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
    venue: {
      name: 'Guaranteed Rate Field',
      address: '333 W 35th St, Chicago, IL 60616',
      latitude: 41.83003798303939,
      longitude: -87.63356981135067,
    },
    icon: {
      svgTitle: 'chicago-white-sox-logo',
    },
  },
  {
    abbreviation: 'CLE',
    name: 'Cleveland Guardians',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
    venue: {
      name: 'Progressive Field',
      address: '2401 Ontario St, Cleveland, OH 44115',
      latitude: 41.49634758919111,
      longitude: -81.68523963040107,
    },
    icon: {
      svgTitle: 'cleveland-guardians-logo',
    },
  },
  {
    abbreviation: 'DET',
    name: 'Detroit Tigers',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
    venue: {
      name: 'Comerica Park',
      address: '2100 Woodward Ave, Detroit, MI 48201',
      latitude: 42.339196640374546,
      longitude: -83.04857334572425,
    },
    icon: {
      svgTitle: 'detroit-tigers-logo',
    },
  },
  {
    abbreviation: 'KC',
    name: 'Kansas City Royals',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
    venue: {
      name: 'Kauffman Stadium',
      address: '1 Royal Way, Kansas City, MO 64129',
      latitude: 39.05185517834522,
      longitude: -94.48031420162035,
    },
    icon: {
      svgTitle: 'kansas-city-royals-logo',
    },
  },
  {
    abbreviation: 'MIN',
    name: 'Minnesota Twins',
    league: MlbLeague.American,
    division: MlbDivision.ALCentral,
    venue: {
      name: 'Target Field',
      address: '1 Twins Way, Minneapolis, MN 55403',
      latitude: 44.98177523159728,
      longitude: -93.27762115485542,
    },
    icon: {
      svgTitle: 'minnesota-twins-logo',
    },
  },
];

const alWestTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'HOU',
    name: 'Houston Astros',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
    venue: {
      name: 'Minute Maid Park',
      address: '501 Crawford St, Houston, TX 77002',
      latitude: 29.757318280844288,
      longitude: -95.35546602204238,
    },
    icon: {
      svgTitle: 'houston-astros-logo',
    },
  },
  {
    abbreviation: 'LAA',
    name: 'Los Angeles Angels',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
    venue: {
      name: 'Angel Stadium of Anaheim',
      address: '2000 E Gene Autry Way, Anaheim, CA 92806',
      latitude: 33.80032797846221,
      longitude: -117.88268517568542,
    },
    icon: {
      svgTitle: 'los-angeles-angels-logo',
    },
  },
  {
    abbreviation: 'OAK',
    name: 'Oakland Athletics',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
    venue: {
      name: 'RingCentral Coliseum',
      address: '7000 Coliseum Way, Oakland, CA 94621',
      latitude: 37.75168782773004,
      longitude: -122.20009520255283,
    },
    icon: {
      svgTitle: 'oakland-athletics-logo',
    },
  },
  {
    abbreviation: 'SEA',
    name: 'Seattle Mariners',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
    venue: {
      name: 'T-Mobile Park',
      address: '1250 1st Ave S, Seattle, WA 98134',
      latitude: 47.59152987066372,
      longitude: -122.3324850149094,
    },
    icon: {
      svgTitle: 'seattle-mariners-logo',
    },
  },
  {
    abbreviation: 'TEX',
    name: 'Texas Rangers',
    league: MlbLeague.American,
    division: MlbDivision.ALWest,
    venue: {
      name: 'Choctaw Stadium',
      address: '1000 Ballpark Way, Arlington, TX 76011',
      latitude: 32.75105969720877,
      longitude: -97.08293179315255,
    },
    icon: {
      svgTitle: 'texas-rangers-logo',
    },
  },
];

const nlEastTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'ATL',
    name: 'Atlanta Braves',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
    venue: {
      name: 'Truist Park',
      address: '755 Battery Ave SE, Atlanta, GA 30339',
      latitude: 33.89110465753983,
      longitude: -84.46837738208617,
    },
    icon: {
      svgTitle: 'atlanta-braves-logo',
    },
  },
  {
    abbreviation: 'MIA',
    name: 'Miami Marlins',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
    venue: {
      name: 'LoanDepot Park',
      address: '501 Marlins Way, Miami, FL 33125',
      latitude: 25.778187328152566,
      longitude: -80.21960248407657,
    },
    icon: {
      svgTitle: 'miami-marlins-logo',
    },
  },
  {
    abbreviation: 'NYM',
    name: 'New York Mets',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
    venue: {
      name: 'Citi Field',
      address: '41 Seaver Way, Queens, NY 11368',
      latitude: 40.75719332915317,
      longitude: -73.84584275925359,
    },
    icon: {
      svgTitle: 'new-york-mets-logo',
    },
  },
  {
    abbreviation: 'PHI',
    name: 'Philadelphia Phillies',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
    venue: {
      name: 'Citizens Bank Park',
      address: '1 Citizens Bank Way, Philadelphia, PA 19148',
      latitude: 39.90613947989118,
      longitude: -75.16651665927282,
    },
    icon: {
      svgTitle: 'philadelphia-phillies-logo',
    },
  },
  {
    abbreviation: 'WSH',
    name: 'Washington Nationals',
    league: MlbLeague.National,
    division: MlbDivision.NLEast,
    venue: {
      name: 'Nationals Park',
      address: '1500 S Capitol St SE, Washington, DC 20003',
      latitude: 38.873064472755665,
      longitude: -77.00737389302796,
    },
    icon: {
      svgTitle: 'washington-nationals-logo',
    },
  },
];

const nlCentralTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'CHC',
    name: 'Chicago Cubs',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
    venue: {
      name: 'Wrigley Field',
      address: '1060 W Addison St, Chicago, IL 60613',
      latitude: 41.94848226654854,
      longitude: -87.65534745370392,
    },
    icon: {
      svgTitle: 'chicago-cubs-logo',
    },
  },
  {
    abbreviation: 'CIN',
    name: 'Cincinnati Reds',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
    venue: {
      name: 'Great American Ball Park',
      address: '100 Joe Nuxhall Way, Cincinnati, OH 45202',
      latitude: 39.09745571685438,
      longitude: -84.50707676603723,
    },
    icon: {
      svgTitle: 'cincinnati-reds-logo',
    },
  },
  {
    abbreviation: 'MIL',
    name: 'Milwaukee Brewers',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
    venue: {
      name: 'American Family Field',
      address: '1 Brewers Way, Milwaukee, WI 53214',
      latitude: 43.027993265043335,
      longitude: -87.97115844815623,
    },
    icon: {
      svgTitle: 'milwaukee-brewers-logo',
    },
  },
  {
    abbreviation: 'PIT',
    name: 'Pittsburgh Pirates',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
    venue: {
      name: 'PNC Park',
      address: '115 Federal St, Pittsburgh, PA 15212',
      latitude: 40.44696343223629,
      longitude: -80.00570540158924,
    },
    icon: {
      svgTitle: 'pittsburgh-pirates-logo',
    },
  },
  {
    abbreviation: 'STL',
    name: 'St. Louis Cardinals',
    league: MlbLeague.National,
    division: MlbDivision.NLCentral,
    venue: {
      name: 'Busch Stadium',
      address: '700 Clark Ave, St. Louis, MO 63102',
      latitude: 38.622711003723104,
      longitude: -90.19286381534252,
    },
    icon: {
      svgTitle: 'st-louis-cardinals-logo',
    },
  },
];

const nlWestTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'ARI',
    name: 'Arizona Diamondbacks',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
    venue: {
      name: 'Chase Field',
      address: '401 E Jefferson St, Phoenix, AZ 85004',
      latitude: 33.44534319312358,
      longitude: -112.06666760950466,
    },
    icon: {
      svgTitle: 'arizona-diamondbacks-logo',
    },
  },
  {
    abbreviation: 'COL',
    name: 'Colorado Rockies',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
    venue: {
      name: 'Coors Field',
      address: '2001 Blake St, Denver, CO 80205',
      latitude: 39.75593795381981,
      longitude: -104.9941727371869,
    },
    icon: {
      svgTitle: 'colorado-rockies-logo',
    },
  },
  {
    abbreviation: 'LAD',
    name: 'Los Angeles Dodgers',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
    venue: {
      name: 'Dodger Stadium',
      address: '1000 Vin Scully Ave, Los Angeles, CA 90012',
      latitude: 34.073944292563766,
      longitude: -118.23994220846994,
    },
    icon: {
      svgTitle: 'los-angeles-dodgers-logo',
    },
  },
  {
    abbreviation: 'SD',
    name: 'San Diego Padres',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
    venue: {
      name: 'Petco Park',
      address: '100 Park Blvd, San Diego, CA 92101',
      latitude: 32.70734375935741,
      longitude: -117.15675304837643,
    },
    icon: {
      svgTitle: 'san-diego-padres-logo',
    },
  },
  {
    abbreviation: 'SF',
    name: 'San Francisco Giants',
    league: MlbLeague.National,
    division: MlbDivision.NLWest,
    venue: {
      name: 'Oracle Park',
      address: '24 Willie Mays Plaza, San Francisco, CA 94107',
      latitude: 37.77934132738521,
      longitude: -122.3892483423286,
    },
    icon: {
      svgTitle: 'san-francisco-giants-logo',
    },
  },
];

export const mlbTeamDetails: TeamDetails[] = [
  ...alEastTeamDetails,
  ...alCentralTeamDetails,
  ...alWestTeamDetails,
  ...nlEastTeamDetails,
  ...nlCentralTeamDetails,
  ...nlWestTeamDetails,
];
