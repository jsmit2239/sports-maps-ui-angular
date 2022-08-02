import { NhlConference, NhlDivision } from '../enums/nhl-enum';
import { TeamDetails } from '../../../shared/interfaces/team-details-interface';

const easternConferenceAtlanticDivisionTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'BOS',
    name: 'Boston Bruins',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: {
      name: 'TD Garden',
      address: '100 Legends Way, Boston, MA 02114',
      latitude: 42.36635651964218,
      longitude: -71.06159883092985,
    },
    icon: {
      svgTitle: 'boston-bruins-logo',
    },
  },
  {
    abbreviation: 'BUF',
    name: 'Buffalo Sabres',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: {
      name: 'KeyBank Center',
      address: '1 Seymour H Knox III Plaza, Buffalo, NY 14203',
      latitude: 42.87522260413956,
      longitude: -78.8762113076308,
    },
    icon: { svgTitle: 'buffalo-sabres-logo' },
  },
  {
    abbreviation: 'DET',
    name: 'Detroit Red Wings',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: {
      name: 'Little Caesars Arena',
      address: '2645 Woodward Ave, Detroit, MI 48201',
      latitude: 42.34112339595631,
      longitude: -83.05527266596589,
    },
    icon: { svgTitle: 'detroit-red-wings-logo' },
  },

  {
    abbreviation: 'FLA',
    name: 'Florida Panthers',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: {
      name: 'FLA Live Arena',
      address: '1 Panther Pkwy, Sunrise, FL 33323',
      latitude: 26.15853189582724,
      longitude: -80.32544798222136,
    },
    icon: {
      svgTitle: 'florida-panthers-logo',
    },
  },
  {
    abbreviation: 'MTL',
    name: 'Montreal Canadiens',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: {
      name: 'Centre Bell',
      address:
        '1909 Av. des Canadiens-de-Montréal, Montréal, QC H3B 5E8, Canada',
      latitude: 45.496086420320516,
      longitude: -73.56930725484564,
    },
    icon: {
      svgTitle: 'montreal-canadiens-logo',
    },
  },
  {
    abbreviation: 'OTT',
    name: 'Ottawa Senators',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: {
      name: 'Canadian Tire Centre',
      address: '1000 Palladium Dr, Ottawa, ON K2V 1A5, Canada',
      latitude: 45.29705094614054,
      longitude: -75.92685518649549,
    },
    icon: {
      svgTitle: 'ottawa-senators-logo',
    },
  },
  {
    abbreviation: 'TBL',
    name: 'Tampa Bay Lightning',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: {
      name: 'Amalie Arena',
      address: '401 Channelside Dr, Tampa, FL 33602',
      latitude: 27.94274296006068,
      longitude: -82.45178802852142,
    },
    icon: {
      svgTitle: 'tampa-bay-lightning-logo',
    },
  },
  {
    abbreviation: 'TOR',
    name: 'Toronto Maple Leafs',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: {
      name: 'Scotiabank Arena',
      address: '40 Bay St., Toronto, ON M5J 2X2, Canada',
      latitude: 43.64350489863835,
      longitude: -79.37901038862337,
    },
    icon: { svgTitle: 'toronto-maple-leafs-logo' },
  },
];

const easternConferenceMetropolitanDivisionTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'CAR',
    name: 'Carolina Hurricanes',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: {
      name: 'PNC Arena',
      address: '1400 Edwards Mill Rd, Raleigh, NC 27607',
      latitude: 35.803348558327,
      longitude: -78.72180582500384,
    },
    icon: {
      svgTitle: 'carolina-hurricanes-logo',
    },
  },
  {
    abbreviation: 'CBJ',
    name: 'Columbus Blue Jackets',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: {
      name: 'Nationwide Arena',
      address: '200 W Nationwide Blvd, Columbus, OH 43215',
      latitude: 39.96923287463439,
      longitude: -83.00604293718426,
    },
    icon: {
      svgTitle: 'columbus-blue-jackets-logo',
    },
  },
  {
    abbreviation: 'NJD',
    name: 'New Jersey Devils',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: {
      name: 'Prudential Center',
      address: '25 Lafayette St, Newark, NJ 07102',
      latitude: 40.73356136873307,
      longitude: -74.17106858380309,
    },
    icon: {
      svgTitle: 'new-jersey-devils-logo',
    },
  },
  {
    abbreviation: 'NYI',
    name: 'New York Islanders',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: {
      name: 'UBS Arena',
      address: '2400 Hempstead Turnpike, Elmont, NY 11003',
      latitude: 40.71180176974007,
      longitude: -73.72604315434921,
    },
    icon: {
      svgTitle: 'new-york-islanders-logo',
    },
  },
  {
    abbreviation: 'NYR',
    name: 'New York Rangers',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: {
      name: 'Madison Square Garden',
      address: '4 Pennsylvania Plaza, New York, NY 10001',
      latitude: 40.75054301990775,
      longitude: -73.99344944190267,
    },
    icon: {
      svgTitle: 'new-york-rangers-logo',
    },
  },
  {
    abbreviation: 'PHI',
    name: 'Philadelphia Flyers',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: {
      name: 'Wells Fargo Center',
      address: '3601 S Broad St, Philadelphia, PA 19148',
      latitude: 39.90124059554696,
      longitude: -75.17198218220045,
    },
    icon: {
      svgTitle: 'philadelphia-flyers-logo',
    },
  },
  {
    abbreviation: 'PIR',
    name: 'Pittsburgh Penguins',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: {
      name: 'PPG Paints Arena',
      address: '1001 Fifth Ave, Pittsburgh, PA 15219',
      latitude: 40.43932090712607,
      longitude: -79.98955491324823,
    },
    icon: {
      svgTitle: 'pittsburgh-penguins-logo',
    },
  },
  {
    abbreviation: 'WSH',
    name: 'Washington Capitals',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: {
      name: 'Capital One Arena',
      address: '601 F St NW, Washington, DC 20004',
      latitude: 38.89817426382943,
      longitude: -77.02085747218304,
    },
    icon: {
      svgTitle: 'washington-capitals-logo',
    },
  },
];

const westernConferenceCentralDivisionTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'ARI',
    name: 'Arizona Coyotes',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: {
      name: 'ASU Multi-Purpose Arena',
      address: '201 S Packard Dr, Tempe, AZ 85281',
      latitude: 33.42780307045391,
      longitude: -111.92812461277957,
    },
    icon: {
      svgTitle: 'arizona-coyotes-logo',
    },
  },
  {
    abbreviation: 'CHI',
    name: 'Chicago Blackhawks',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: {
      name: 'United Center',
      address: '1901 W Madison St, Chicago, IL 60612',
      latitude: 41.88069876722966,
      longitude: -87.67416383161978,
    },
    icon: {
      svgTitle: 'chicago-blackhawks-logo',
    },
  },
  {
    abbreviation: 'COL',
    name: 'Colorado Avalanche',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: {
      name: 'Ball Arena',
      address: '1000 Chopper Cir, Denver, CO 80204',
      latitude: 39.74867710179193,
      longitude: -105.00761084823363,
    },
    icon: {
      svgTitle: 'colorado-avalanche-logo',
    },
  },
  {
    abbreviation: 'DAL',
    name: 'Dallas Stars',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: {
      name: 'American Airlines Center',
      address: '2500 Victory Ave., Dallas, TX 75219',
      latitude: 32.79040679242179,
      longitude: -96.81025374775074,
    },
    icon: {
      svgTitle: 'dallas-stars-logo',
    },
  },
  {
    abbreviation: 'MIN',
    name: 'Minnesota Wild',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: {
      name: 'Xcel Energy Center',
      address: '199 W Kellogg Blvd, St Paul, MN 55102',
      latitude: 44.94464106706121,
      longitude: -93.10018644752071,
    },
    icon: {
      svgTitle: 'minnesota-wild',
    },
  },
  {
    abbreviation: 'NSH',
    name: 'Nashville Predators',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: {
      name: 'Bridgestone Arena',
      address: '501 Broadway, Nashville, TN 37203',
      latitude: 36.15919415294487,
      longitude: -86.77849858389213,
    },
    icon: {
      svgTitle: 'nashville-predators-logo',
    },
  },
  {
    abbreviation: 'STL',
    name: 'St. Louis Blues',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: {
      name: 'Enterprise Center',
      address: '1401 Clark Ave, St. Louis, MO 63103',
      latitude: 38.626884203745476,
      longitude: -90.20267561781263,
    },
    icon: {
      svgTitle: 'st-louis-blues-logo',
    },
  },
  {
    abbreviation: 'WPG',
    name: 'Winnipeg Jets',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: {
      name: 'Canada Life Centre',
      address: '223 Carlton St, Winnipeg, MB R3C 5S6, Canada',
      latitude: 49.89265378305794,
      longitude: -97.14376508356901,
    },
    icon: {
      svgTitle: 'winnipeg-jets-logo',
    },
  },
];

const westernConferencePacificDivisionTeamDetails: TeamDetails[] = [
  {
    abbreviation: 'ANA',
    name: 'Anaheim Ducks',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: {
      name: 'Honda Center',
      address: '2695 E Katella Ave, Anaheim, CA 92806',
      latitude: 33.80787766770747,
      longitude: -117.87647004283426,
    },
    icon: {
      svgTitle: 'anaheim-ducks-logo',
    },
  },
  {
    abbreviation: 'CGY',
    name: 'Calgary Flames',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: {
      name: 'Scotiabank Saddledome',
      address: '555 Saddledome Rise SE, Calgary, AB T2G 2W1, Canada',
      latitude: 51.03747405810066,
      longitude: -114.05195555900085,
    },
    icon: {
      svgTitle: 'calgary-flames-logo',
    },
  },
  {
    abbreviation: 'EDM',
    name: 'Edmonton Oilers',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: {
      name: 'Rogers Place',
      address: '10220 104 Ave NW, Edmonton, AB T5J 0H6, Canada',
      latitude: 53.54698265153923,
      longitude: -113.49780509512647,
    },
    icon: {
      svgTitle: 'edmonton-oilers-logo',
    },
  },
  {
    abbreviation: 'LAK',
    name: 'Los Angeles Kings',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: {
      name: 'Crypto.com Arena',
      address: '1111 S Figueroa St, Los Angeles, CA 90015',
      latitude: 34.04305526352989,
      longitude: -118.26721386859154,
    },
    icon: {
      svgTitle: 'los-angeles-kings-logo',
    },
  },
  {
    abbreviation: 'SJS',
    name: 'San Jose Sharks',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: {
      name: 'SAP Center at San Jose',
      address: '525 W Santa Clara St, San Jose, CA 95113',
      latitude: 37.332990134665025,
      longitude: -121.90200279489873,
    },
    icon: {
      svgTitle: 'san-jose-sharks-logo',
    },
  },
  {
    abbreviation: 'SEA',
    name: 'Seattle Kraken',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: {
      name: 'Climate Pledge Arena',
      address: '334 1st Ave N, Seattle, WA 98109',
      latitude: 47.6220993009584,
      longitude: -122.35407810694151,
    },
    icon: {
      svgTitle: 'seattle-kraken-logo',
    },
  },
  {
    abbreviation: 'VAN',
    name: 'Vancouver Canucks',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: {
      name: 'Rogers Arena',
      address: '800 Griffiths Way, Vancouver, BC V6B 6G1, Canada',
      latitude: 49.277854152759446,
      longitude: -123.10882136027172,
    },
    icon: {
      svgTitle: 'vancouver-canucks-logo',
    },
  },
  {
    abbreviation: 'VGK',
    name: 'Las Vegas Golden Knights',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: {
      name: 'T-Mobile Arena',
      address: '3780 Las Vegas Blvd S, Las Vegas, NV 89158',
      latitude: 36.102954489551735,
      longitude: -115.17814898389337,
    },
    icon: {
      svgTitle: 'las-vegas-golden-knights-logo',
    },
  },
];

export const nhlTeamDetails: TeamDetails[] = [
  ...easternConferenceAtlanticDivisionTeamDetails,
  ...easternConferenceMetropolitanDivisionTeamDetails,
  ...westernConferenceCentralDivisionTeamDetails,
  ...westernConferencePacificDivisionTeamDetails,
];
