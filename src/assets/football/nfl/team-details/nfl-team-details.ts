import { TeamDetails } from '../../../shared/interfaces/team-details-interface';
import { NflConference, NflDivision } from '../enums/nfl-enum';

const afcNorthTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'BAL',
    name: 'Baltimore Ravens',
    conference: NflConference.Afc,
    division: NflDivision.AfcNorth,
    venue: {
      name: 'M&T Bank Stadium',
      address: '1101 Russell St, Baltimore, MD 21230',
      latitude: 39.27817405620018,
      longitude: -76.62275260556474,
    },
    icon: {
      svgTitle: 'baltimore-ravens-logo',
    },
  },
  {
    abbreviation: 'CIN',
    name: 'Cincinnati Bengals',
    conference: NflConference.Afc,
    division: NflDivision.AfcNorth,
    venue: {
      name: 'Paul Brown Stadium',
      address: '1 Paul Brown Stadium, Cincinnati, OH 45202',
      latitude: 39.095616223244456,
      longitude: -84.51602247808644,
    },
    icon: {
      svgTitle: 'cincinnati-bengals-logo',
    },
  },
  {
    abbreviation: 'CLE',
    name: 'Cleveland Browns',
    conference: NflConference.Afc,
    division: NflDivision.AfcNorth,
    venue: {
      name: 'FirstEnergy Stadium',
      address: '100 Alfred Lerner Way, Cleveland, OH 44114',
      latitude: 41.50624229376643,
      longitude: -81.6995963819241,
    },
    icon: {
      svgTitle: 'cleveland-browns-logo',
    },
  },
  {
    abbreviation: 'PIT',
    name: 'Pittsburgh Steelers',
    conference: NflConference.Afc,
    division: NflDivision.AfcNorth,
    venue: {
      name: 'Acrisure Stadium',
      address: '100 Art Rooney Ave, Pittsburgh, PA 15212',
      latitude: 40.446973000579774,
      longitude: -80.01578712218739,
    },
    icon: {
      svgTitle: 'pittsburgh-steelers-logo',
    },
  },
];

const afcSouthTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'HOU',
    name: 'Houston Texans',
    conference: NflConference.Afc,
    division: NflDivision.AfcSouth,
    venue: {
      name: 'NRG Stadium',
      address: 'NRG Pkwy, Houston, TX 77054',
      latitude: 29.68489433506001,
      longitude: -95.41079859525102,
    },
    icon: {
      svgTitle: 'houston-texans-logo',
    },
  },
  {
    abbreviation: 'IND',
    name: 'Indianapolis Colts',
    conference: NflConference.Afc,
    division: NflDivision.AfcSouth,
    venue: {
      name: 'Lucas Oil Stadium',
      address: '500 S Capitol Ave, Indianapolis, IN 46225',
      latitude: 39.76021204208143,
      longitude: -86.16389306451744,
    },
    icon: {
      svgTitle: 'indianapolis-colts-logo',
    },
  },
  {
    abbreviation: 'JAC',
    name: 'Jacksonville Jaguars',
    conference: NflConference.Afc,
    division: NflDivision.AfcSouth,
    venue: {
      name: 'TIAA Bank Field',
      address: '1 TIAA Bank Field Dr, Jacksonville, FL 32202',
      latitude: 30.323970096284345,
      longitude: -81.6373872509771,
    },
    icon: {
      svgTitle: 'jacksonville-jaguars-logo',
    },
  },
  {
    abbreviation: 'TEN',
    name: 'Tennessee Titans',
    conference: NflConference.Afc,
    division: NflDivision.AfcSouth,
    venue: {
      name: 'Nissan Stadium',
      address: '1 Titans Way, Nashville, TN 37213',
      latitude: 36.16651198777783,
      longitude: -86.77127018424349,
    },
    icon: {
      svgTitle: 'tennessee-titans-logo',
    },
  },
];

const afcEastTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'BUF',
    name: 'Buffalo Bills',
    conference: NflConference.Afc,
    division: NflDivision.AfcEast,
    venue: {
      name: 'Highmark Stadium',
      address: '1 Bills Dr, Orchard Park, NY 14127',
      latitude: 42.773809286827415,
      longitude: -78.78694605981231,
    },
    icon: {
      svgTitle: 'buffalo-bills-logo',
    },
  },
  {
    abbreviation: 'MIA',
    name: 'Miami Dolphins',
    conference: NflConference.Afc,
    division: NflDivision.AfcEast,
    venue: {
      name: 'Hard Rock Stadium',
      address: '347 Don Shula Dr, Miami Gardens, FL 33056',
      latitude: 25.958000262606944,
      longitude: -80.23885503568583,
    },
    icon: {
      svgTitle: 'miami-dolphins-logo',
    },
  },
  {
    abbreviation: 'NE',
    name: 'New England Patriots',
    conference: NflConference.Afc,
    division: NflDivision.AfcEast,
    venue: {
      name: 'Gillette Stadium',
      address: '1 Patriot Pl, Foxborough, MA 02035',
      latitude: 42.09106920581192,
      longitude: -71.26423384732003,
    },
    icon: {
      svgTitle: 'new-england-patriots-logo',
    },
  },
  {
    abbreviation: 'NYJ',
    name: 'New York Jets',
    conference: NflConference.Afc,
    division: NflDivision.AfcEast,
    venue: {
      name: 'MetLife Stadium',
      address: '1 MetLife Stadium Dr, East Rutherford, NJ 07073',
      latitude: 40.81358684674211,
      longitude: -74.0744634616095,
    },
    icon: {
      svgTitle: 'new-york-jets-logo',
    },
  },
];

const afcWestTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'DEN',
    name: 'Denver Broncos',
    conference: NflConference.Afc,
    division: NflDivision.AfcWest,
    venue: {
      name: 'Empower Field at Mile High',
      address: '1701 Bryant St, Denver, CO 80204',
      latitude: 39.74404211575339,
      longitude: -105.02007184918583,
    },
    icon: {
      svgTitle: 'denver-broncos-logo',
    },
  },
  {
    abbreviation: 'KC',
    name: 'Kansas City Chiefs',
    conference: NflConference.Afc,
    division: NflDivision.AfcWest,
    venue: {
      name: 'Arrowhead Stadium',
      address: '1 Arrowhead Dr, Kansas City, MO 64129',
      latitude: 39.04897508148378,
      longitude: -94.4839210738427,
    },
    icon: {
      svgTitle: 'kansas-city-chiefs-logo',
    },
  },
  {
    abbreviation: 'LV',
    name: 'Las Vegas Raiders',
    conference: NflConference.Afc,
    division: NflDivision.AfcWest,
    venue: {
      name: 'Allegiant Stadium',
      address: '3333 Al Davis Way, Las Vegas, NV 89118',
      latitude: 36.09101820142651,
      longitude: -115.18329538023626,
    },
    icon: {
      svgTitle: 'las-vegas-raiders-logo',
    },
  },
  {
    abbreviation: 'LAC',
    name: 'Los Angeles Chargers',
    conference: NflConference.Afc,
    division: NflDivision.AfcWest,
    venue: {
      name: 'SoFi Stadium',
      address: '1001 Stadium Dr, Inglewood, CA 90301',
      latitude: 33.95353254545044,
      longitude: -118.33904931598514,
    },
    icon: {
      svgTitle: 'los-angeles-chargers-logo',
    },
  },
];

const nfcNorthTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'CHI',
    name: 'Chicago Bears',
    conference: NflConference.Nfc,
    division: NflDivision.NfcNorth,
    venue: {
      name: 'Soldier Field',
      address: '1410 Special Olympics Dr, Chicago, IL 60605',
      latitude: 41.86250747307787,
      longitude: -87.61663253913102,
    },
    icon: {
      svgTitle: 'chicago-bears-logo',
    },
  },
  {
    abbreviation: 'DET',
    name: 'Detroit Lions',
    conference: NflConference.Nfc,
    division: NflDivision.NfcNorth,
    venue: {
      name: 'Ford Field',
      address: '2000 Brush St, Detroit, MI 48226',
      latitude: 42.34005802193243,
      longitude: -83.04559424324553,
    },
    icon: {
      svgTitle: 'detroit-lions-logo',
    },
  },
  {
    abbreviation: 'GB',
    name: 'Green Bay Packers',
    conference: NflConference.Nfc,
    division: NflDivision.NfcNorth,
    venue: {
      name: 'Lambeau Field',
      address: '1265 Lombardi Ave, Green Bay, WI 54304',
      latitude: 44.50140367147431,
      longitude: -88.06227163792646,
    },
    icon: {
      svgTitle: 'green-bay-packers-logo',
    },
  },
  {
    abbreviation: 'MIN',
    name: 'Minnesota Vikings',
    conference: NflConference.Nfc,
    division: NflDivision.NfcNorth,
    venue: {
      name: 'U.S. Bank Stadium',
      address: '401 Chicago Ave, Minneapolis, MN 55415',
      latitude: 44.9737616701867,
      longitude: -93.25753827469751,
    },
    icon: {
      svgTitle: 'minnesota-vikings-logo',
    },
  },
];

const nfcSouthTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'ATL',
    name: 'Atlanta Falcons',
    conference: NflConference.Nfc,
    division: NflDivision.NfcSouth,
    venue: {
      name: 'Mercedes-Benz Stadium',
      address: '1 AMB Dr NW, Atlanta, GA 30313',
      latitude: 33.755479302431866,
      longitude: -84.40056367801816,
    },
    icon: {
      svgTitle: 'atlanta-falcons-logo',
    },
  },
  {
    abbreviation: 'CAR',
    name: 'Carolina Panthers',
    conference: NflConference.Nfc,
    division: NflDivision.NfcSouth,
    venue: {
      name: 'Bank of America Stadium',
      address: '800 S Mint St, Charlotte, NC 28202',
      latitude: 35.22584523169624,
      longitude: -80.8529274491858,
    },
    icon: {
      svgTitle: 'carolina-panthers-logo',
    },
  },
  {
    abbreviation: 'NO',
    name: 'New Orleans Saints',
    conference: NflConference.Nfc,
    division: NflDivision.NfcSouth,
    venue: {
      name: 'Caesars Superdome',
      address: '1500 Sugar Bowl Dr, New Orleans, LA 70112',
      latitude: 29.95113442961332,
      longitude: -90.08119228752686,
    },
    icon: {
      svgTitle: 'new-orleans-saints-logo',
    },
  },
  {
    abbreviation: 'TB',
    name: 'Tampa Bay Buccaneers',
    conference: NflConference.Nfc,
    division: NflDivision.NfcSouth,
    venue: {
      name: 'Raymond James Stadium',
      address: '4201 N Dale Mabry Hwy, Tampa, FL 33607',
      latitude: 27.97600648915338,
      longitude: -82.50328612034745,
    },
    icon: {
      svgTitle: 'tampa-bay-buccaneers-logo',
    },
  },
];

const nfcEastTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'DAL',
    name: 'Dallas Cowboys',
    conference: NflConference.Nfc,
    division: NflDivision.NfcEast,
    venue: {
      name: 'AT&T Stadium',
      address: '1 AT&T Way, Arlington, TX 76011',
      latitude: 32.747498574637866,
      longitude: -97.09447979076099,
    },
    icon: {
      svgTitle: 'dallas-cowboys-logo',
    },
  },
  {
    abbreviation: 'NYG',
    name: 'New York Giants',
    conference: NflConference.Nfc,
    division: NflDivision.NfcEast,
    venue: {
      name: 'MetLife Stadium',
      address: '1 MetLife Stadium Dr, East Rutherford, NJ 07073',
      latitude: 40.81358684674211,
      longitude: -74.0744634616095,
    },
    icon: {
      svgTitle: 'new-york-giants-logo',
    },
  },
  {
    abbreviation: 'PHI',
    name: 'Philadelphia Eagles',
    conference: NflConference.Nfc,
    division: NflDivision.NfcEast,
    venue: {
      name: 'Lincoln Financial Field',
      address: 'One Lincoln Financial Field Way, Philadelphia, PA 19148',
      latitude: 39.90152999697504,
      longitude: -75.16755905107883,
    },
    icon: {
      svgTitle: 'philadelphia-eagles-logo',
    },
  },
  {
    abbreviation: 'WAS',
    name: 'Washington Commanders',
    conference: NflConference.Nfc,
    division: NflDivision.NfcEast,
    venue: {
      name: 'FedEx Field',
      address: '1600 Fedex Way, North Englewood, MD 20785',
      latitude: 38.907765715490264,
      longitude: -76.86443666265762,
    },
    icon: {
      svgTitle: 'washington-commanders-logo',
    },
  },
];

const nfcWestTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'ARI',
    name: 'Arizona Cardinals',
    conference: NflConference.Nfc,
    division: NflDivision.NfcWest,
    venue: {
      name: 'State Farm Stadium',
      address: '1 Cardinals Dr, Glendale, AZ 85305',
      latitude: 33.527788978158355,
      longitude: -112.26264357987796,
    },
    icon: {
      svgTitle: 'arizona-cardinals-logo',
    },
  },
  {
    abbreviation: 'LAR',
    name: 'Los Angeles Rams',
    conference: NflConference.Nfc,
    division: NflDivision.NfcWest,
    venue: {
      name: 'SoFi Stadium',
      address: '1001 Stadium Dr, Inglewood, CA 90301',
      latitude: 33.95353254545044,
      longitude: -118.33904931598514,
    },
    icon: {
      svgTitle: 'los-angeles-rams-logo',
    },
  },
  {
    abbreviation: 'SF',
    name: 'San Francisco 49ers',
    conference: NflConference.Nfc,
    division: NflDivision.NfcWest,
    venue: {
      name: "Levi's Stadium",
      address: '4900 Marie P DeBartolo Way, Santa Clara, CA 95054',
      latitude: 37.40313527238806,
      longitude: -121.96976393678932,
    },
    icon: {
      svgTitle: 'san-francisco-49ers-logo',
    },
  },
  {
    abbreviation: 'SEA',
    name: 'Seattle Seahawks',
    conference: NflConference.Nfc,
    division: NflDivision.NfcWest,
    venue: {
      name: 'Lumen Field',
      address: '800 Occidental Ave S, Seattle, WA 98134',
      latitude: 47.59524947442457,
      longitude: -122.33161257801298,
    },
    icon: {
      svgTitle: 'seattle-seahawks-logo',
    },
  },
];

export const nflTeamDetails: TeamDetails[] = [
  ...afcNorthTeamDetails,
  ...afcSouthTeamDetails,
  ...afcEastTeamDetails,
  ...afcWestTeamDetails,
  ...nfcNorthTeamDetails,
  ...nfcSouthTeamDetails,
  ...nfcEastTeamDetails,
  ...nfcWestTeamDetails,
];
