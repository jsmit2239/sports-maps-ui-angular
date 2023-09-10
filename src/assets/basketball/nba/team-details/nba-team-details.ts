import { TeamDetails } from '../../../shared/interfaces/team-details-interface';
import { NbaConference, NbaDivision } from '../enums/nba-enum';

const atlanticDivisionEasternConferenceTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'BOS',
    name: 'Boston Celtics',
    conference: NbaConference.Eastern,
    division: NbaDivision.Atlantic,
    venue: {
      name: 'TD Garden',
      address: '100 Legends Way, Boston, MA 02114',
      latitude: 42.36635651964218,
      longitude: -71.06159883092985,
    },
    icon: {
      svgTitle: 'boston-celtics-logo',
    },
  },
  {
    abbreviation: 'BKN',
    name: 'Brooklyn Nets',
    conference: NbaConference.Eastern,
    division: NbaDivision.Atlantic,
    venue: {
      name: 'Barclays Center',
      address: '620 Atlantic Ave, Brooklyn, NY 11217',
      latitude: 40.6826910581486,
      longitude: -73.97541247075047,
    },
    icon: {
      svgTitle: 'brooklyn-nets-logo',
    },
  },
  {
    abbreviation: 'NYK',
    name: 'New York Knicks',
    conference: NbaConference.Eastern,
    division: NbaDivision.Atlantic,
    venue: {
      name: 'Madison Square Garden',
      address: '4 Pennsylvania Plaza, New York, NY 10001',
      latitude: 40.75054301990775,
      longitude: -73.99344944190267,
    },
    icon: {
      svgTitle: 'new-york-knicks-logo',
    },
  },
  {
    abbreviation: 'PHI',
    name: 'Philadelphia 76ers',
    conference: NbaConference.Eastern,
    division: NbaDivision.Atlantic,
    venue: {
      name: 'Wells Fargo Center',
      address: '3601 S Broad St, Philadelphia, PA 19148',
      latitude: 39.90124059554696,
      longitude: -75.17198218220045,
    },
    icon: {
      svgTitle: 'philadelphia-76ers-logo',
    },
  },
  {
    abbreviation: 'TOR',
    name: 'Toronto Raptors',
    conference: NbaConference.Eastern,
    division: NbaDivision.Atlantic,
    venue: {
      name: 'Scotiabank Arena',
      address: '40 Bay St., Toronto, ON M5J 2X2, Canada',
      latitude: 43.64350489863835,
      longitude: -79.37901038862337,
    },
    icon: {
      svgTitle: 'toronto-raptors-logo',
    },
  },
];

const centralDivisionEasternConferenceTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'CHI',
    name: 'Chicago Bulls',
    conference: NbaConference.Eastern,
    division: NbaDivision.Central,
    venue: {
      name: 'United Center',
      address: '1901 W Madison St, Chicago, IL 60612',
      latitude: 41.88069876722966,
      longitude: -87.67416383161978,
    },
    icon: {
      svgTitle: 'chicago-bulls-logo',
    },
  },
  {
    abbreviation: 'CLE',
    name: 'Cleveland Cavaliers',
    conference: NbaConference.Eastern,
    division: NbaDivision.Central,
    venue: {
      name: 'Rocket Mortgage FieldHouse',
      address: '1 Center Court, Cleveland, OH 44115',
      latitude: 41.49659259880219,
      longitude: -81.68807726310256,
    },
    icon: {
      svgTitle: 'cleveland-cavaliers-logo',
    },
  },
  {
    abbreviation: 'DET',
    name: 'Detroit Pistons',
    conference: NbaConference.Eastern,
    division: NbaDivision.Central,
    venue: {
      name: 'Little Caesars Arena',
      address: '2645 Woodward Ave, Detroit, MI 48201',
      latitude: 42.34112339595631,
      longitude: -83.05527266596589,
    },
    icon: {
      svgTitle: 'detroit-pistons-logo',
    },
  },
  {
    abbreviation: 'IND',
    name: 'Indiana Pacers',
    conference: NbaConference.Eastern,
    division: NbaDivision.Central,
    venue: {
      name: 'Gainbridge Fieldhouse',
      address: '125 S Pennsylvania St, Indianapolis, IN 46204',
      latitude: 39.764121747362395,
      longitude: -86.15553133571619,
    },
    icon: {
      svgTitle: 'indiana-pacers-logo',
    },
  },
  {
    abbreviation: 'MIL',
    name: 'Milwaukee Bucks',
    conference: NbaConference.Eastern,
    division: NbaDivision.Central,
    venue: {
      name: 'Fiserv Forum',
      address: '1111 Vel R. Phillips Ave, Milwaukee, WI 53203',
      latitude: 43.04516052435939,
      longitude: -87.91738326783381,
    },
    icon: {
      svgTitle: 'milwaukee-bucks-logo',
    },
  },
];

const southeastDivisionEasternConferenceTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'ATL',
    name: 'Atlanta Hawks',
    conference: NbaConference.Eastern,
    division: NbaDivision.Southeast,
    venue: {
      name: 'State Farm Arena',
      address: '1 State Farm Dr, Atlanta, GA 30303',
      latitude: 33.757382759343685,
      longitude: -84.39632976455594,
    },
    icon: {
      svgTitle: 'atlanta-hawks-logo',
    },
  },
  {
    abbreviation: 'CHA',
    name: 'Charlotte Hornets',
    conference: NbaConference.Eastern,
    division: NbaDivision.Southeast,
    venue: {
      name: 'Spectrum Center',
      address: '333 E Trade St, Charlotte, NC 28202',
      latitude: 35.22525343217034,
      longitude: -80.83928892037862,
    },
    icon: {
      svgTitle: 'charlotte-hornets-logo',
    },
  },
  {
    abbreviation: 'MIA',
    name: 'Miami Heat',
    conference: NbaConference.Eastern,
    division: NbaDivision.Southeast,
    venue: {
      name: 'FTX Arena',
      address: '601 Biscayne Blvd, Miami, FL 33132',
      latitude: 25.781493178384615,
      longitude: -80.18694217806025,
    },
    icon: {
      svgTitle: 'miami-heat-logo',
    },
  },
  {
    abbreviation: 'ORL',
    name: 'Orlando Magic',
    conference: NbaConference.Eastern,
    division: NbaDivision.Southeast,
    venue: {
      name: 'Amway Center',
      address: '400 W Church St Suite 200, Orlando, FL 32801',
      latitude: 28.539301513970656,
      longitude: -81.38382667804548,
    },
    icon: {
      svgTitle: 'orlando-magic-logo',
    },
  },
  {
    abbreviation: 'WSH',
    name: 'Washington Wizards',
    conference: NbaConference.Eastern,
    division: NbaDivision.Southeast,
    venue: {
      name: 'Capital One Arena',
      address: '601 F St NW, Washington, DC 20004',
      latitude: 38.89817426382943,
      longitude: -77.02085747218304,
    },
    icon: {
      svgTitle: 'washington-wizards-logo',
    },
  },
];

const northwestDivisionWesternConferenceTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'DEN',
    name: 'Denver Nuggets',
    conference: NbaConference.Western,
    division: NbaDivision.Northwest,
    venue: {
      name: 'Ball Arena',
      address: '1000 Chopper Cir, Denver, CO 80204',
      latitude: 39.74867710179193,
      longitude: -105.00761084823363,
    },
    icon: {
      svgTitle: 'denver-nuggets-logo',
    },
  },
  {
    abbreviation: 'MIN',
    name: 'Minnesota Timberwolves',
    conference: NbaConference.Western,
    division: NbaDivision.Northwest,
    venue: {
      name: 'Target Center',
      address: '600 N 1st Ave, Minneapolis, MN 55403',
      latitude: 44.979580931716264,
      longitude: -93.27607860687347,
    },
    icon: {
      svgTitle: 'minnesota-timberwolves-logo',
    },
  },
  {
    abbreviation: 'OKC',
    name: 'Oklahoma City Thunder',
    conference: NbaConference.Western,
    division: NbaDivision.Northwest,
    venue: {
      name: 'Paycom Center',
      address: '100 W Reno Ave, Oklahoma City, OK 73102',
      latitude: 35.463525192532636,
      longitude: -97.51521572403534,
    },
    icon: {
      svgTitle: 'oklahoma-city-thunder-logo',
    },
  },
  {
    abbreviation: 'POR',
    name: 'Portland Trail Blazers',
    conference: NbaConference.Western,
    division: NbaDivision.Northwest,
    venue: {
      name: 'Moda Center',
      address: '1 N Center Ct St, Portland, OR 97227',
      latitude: 45.53162898360316,
      longitude: -122.66690130870293,
    },
    icon: {
      svgTitle: 'portland-trail-blazers-logo',
    },
  },
  {
    abbreviation: 'UTA',
    name: 'Utah Jazz',
    conference: NbaConference.Western,
    division: NbaDivision.Northwest,
    venue: {
      name: 'Delta Center',
      address: '301 S Temple, Salt Lake City, UT 84101',
      latitude: 40.76829653943924,
      longitude: -111.9010713068542,
    },
    icon: {
      svgTitle: 'utah-jazz-logo',
    },
  },
];

const pacificDivisionWesternConferenceTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'GSW',
    name: 'Golden State Warriors',
    conference: NbaConference.Western,
    division: NbaDivision.Pacific,
    venue: {
      name: 'Chase Center',
      address: '1 Warriors Way, San Francisco, CA 94158',
      latitude: 37.768158238220835,
      longitude: -122.38788256450637,
    },
    icon: {
      svgTitle: 'golden-state-warriors-logo',
    },
  },
  {
    abbreviation: 'LAC',
    name: 'Los Angeles Clippers',
    conference: NbaConference.Western,
    division: NbaDivision.Pacific,
    venue: {
      name: 'Crypto.com Arena',
      address: '1111 S Figueroa St, Los Angeles, CA 90015',
      latitude: 34.04305526352989,
      longitude: -118.26721386859154,
    },
    icon: {
      svgTitle: 'los-angeles-clippers-logo',
    },
  },
  {
    abbreviation: 'LAL',
    name: 'Los Angeles Lakers',
    conference: NbaConference.Western,
    division: NbaDivision.Pacific,
    venue: {
      name: 'Crypto.com Arena',
      address: '1111 S Figueroa St, Los Angeles, CA 90015',
      latitude: 34.04305526352989,
      longitude: -118.26721386859154,
    },
    icon: {
      svgTitle: 'los-angeles-lakers-logo',
    },
  },
  {
    abbreviation: 'PHX',
    name: 'Phoenix Suns',
    conference: NbaConference.Western,
    division: NbaDivision.Pacific,
    venue: {
      name: 'Footprint Center',
      address: '201 E Jefferson St, Phoenix, AZ 85004',
      latitude: 33.44588471162864,
      longitude: -112.07120566453075,
    },
    icon: {
      svgTitle: 'phoenix-suns-logo',
    },
  },
  {
    abbreviation: 'SAC',
    name: 'Sacramento Kings',
    conference: NbaConference.Western,
    division: NbaDivision.Pacific,
    venue: {
      name: 'Golden 1 Center',
      address: '500 David J Stern Walk, Sacramento, CA 95814',
      latitude: 38.58027482616303,
      longitude: -121.49967807191479,
    },
    icon: {
      svgTitle: 'sacramento-kings-logo',
    },
  },
];

const southwestDivisionWesternConferenceTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'DAL',
    name: 'Dallas Mavericks',
    conference: NbaConference.Western,
    division: NbaDivision.Southwest,
    venue: {
      name: 'American Airlines Center',
      address: '2500 Victory Ave., Dallas, TX 75219',
      latitude: 32.79040679242179,
      longitude: -96.81025374775074,
    },
    icon: {
      svgTitle: 'dallas-mavericks-logo',
    },
  },
  {
    abbreviation: 'HOU',
    name: 'Houston Rockets',
    conference: NbaConference.Western,
    division: NbaDivision.Southwest,
    venue: {
      name: 'Toyota Center',
      address: '1510 Polk St, Houston, TX 77003',
      latitude: 29.75094203631798,
      longitude: -95.36208440683428,
    },
    icon: {
      svgTitle: 'houston-rockets-logo',
    },
  },
  {
    abbreviation: 'MEM',
    name: 'Memphis Grizzlies',
    conference: NbaConference.Western,
    division: NbaDivision.Southwest,
    venue: {
      name: 'FedEx Forum',
      address: '191 Beale St, Memphis, TN 38103',
      latitude: 35.13820760261322,
      longitude: -90.05057567119206,
    },
    icon: {
      svgTitle: 'memphis-grizzlies-logo',
    },
  },
  {
    abbreviation: 'NOP',
    name: 'New Orleans Pelicans',
    conference: NbaConference.Western,
    division: NbaDivision.Southwest,
    venue: {
      name: 'Smoothie King Center',
      address: '1501 Dave Dixon Dr, New Orleans, LA 70113',
      latitude: 29.94912341397773,
      longitude: -90.08202997805067,
    },
    icon: {
      svgTitle: 'new-orleans-pelicans-logo',
    },
  },
  {
    abbreviation: 'SAS',
    name: 'San Antonio Spurs',
    conference: NbaConference.Western,
    division: NbaDivision.Southwest,
    venue: {
      name: 'Frost Bank Center',
      address: '1 AT&T Center Parkway, San Antonio, TX 78219',
      latitude: 29.42717428619796,
      longitude: -98.4375027510456,
    },
    icon: {
      svgTitle: 'san-antonio-spurs-logo',
    },
  },
];

export const nbaTeamDetails: TeamDetails[] = [
  ...atlanticDivisionEasternConferenceTeamDetails,
  ...centralDivisionEasternConferenceTeamDetails,
  ...southeastDivisionEasternConferenceTeamDetails,
  ...northwestDivisionWesternConferenceTeamDetails,
  ...pacificDivisionWesternConferenceTeamDetails,
  ...southwestDivisionWesternConferenceTeamDetails,
];
