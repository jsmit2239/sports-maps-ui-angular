export interface TeamDetails {
  abbreviation?: string;
  name?: string;
  // venue?: VenueDetails;
  conference: NhlConference;
  division: string;
  venue?: string;
  address?: string;
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
    venue: 'TD Garden',
    address: '100 Legends Way, Boston, MA 02114',
  },
  {
    name: 'Buffalo Sabres',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: 'KeyBank Center',
    address: '1 Seymour H Knox III Plaza, Buffalo, NY 14203',
  },
  {
    name: 'Detroit Red Wings',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: 'Little Caesars Arena',
    address: '2645 Woodward Ave, Detroit, MI 48201',
  },
  {
    name: 'Florida Panthers',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: 'FLA Live Arena',
    address: '1 Panther Pkwy, Sunrise, FL 33323',
  },
  {
    name: 'Montreal Canadiens',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: 'Centre Bell',
    address: '1909 Av. des Canadiens-de-Montréal, Montréal, QC H3B 5E8, Canada',
  },
  {
    name: 'Ottawa Senators',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: 'Canadian Tire Centre',
    address: '1000 Palladium Dr, Ottawa, ON K2V 1A5, Canada',
  },
  {
    name: 'Tampa Bay Lightning',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: 'Amalie Arena',
    address: '401 Channelside Dr, Tampa, FL 33602',
  },
  {
    name: 'Toronto Maple Leafs',
    conference: NhlConference.Eastern,
    division: NhlDivision.Atlantic,
    venue: 'Scotiabank Arena',
    address: '40 Bay St., Toronto, ON M5J 2X2, Canada',
  },
];

const easternConferenceMetropolitanDivisionTeamDetails: TeamDetails[] = [
  {
    name: 'Carolina Hurricanes',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: 'PNC Arena',
    address: '1400 Edwards Mill Rd, Raleigh, NC 27607',
  },
  {
    name: 'Columbus Blue Jackets',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: 'Nationwide Arena',
    address: '200 W Nationwide Blvd, Columbus, OH 43215',
  },
  {
    name: 'New Jersey Devils',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: 'Prudential Center',
    address: '25 Lafayette St, Newark, NJ 07102',
  },
  {
    name: 'New York Islanders',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: 'UBS Arena',
    address: '2400 Hempstead Turnpike, Elmont, NY 11003',
  },
  {
    name: 'New York Rangers',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: 'Madison Square Garden',
    address: '4 Pennsylvania Plaza, New York, NY 10001',
  },
  {
    name: 'Philadelphia Flyers',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: 'Wells Fargo Center',
    address: '3601 S Broad St, Philadelphia, PA 19148',
  },
  {
    name: 'Pittsburgh Penguins',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: 'PPG Paints Arena',
    address: '1001 Fifth Ave, Pittsburgh, PA 15219',
  },
  {
    name: 'Washington Capitals',
    conference: NhlConference.Eastern,
    division: NhlDivision.Metropolitan,
    venue: 'Capital One Arena',
    address: '601 F St NW, Washington, DC 20004',
  },
];

const westernConferenceCentralDivisionTeamDetails: TeamDetails[] = [
  {
    name: 'Arizona Coyotes',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: 'ASU Multi-Purpose Arena',
    address: '201 S Packard Dr, Tempe, AZ 85281',
  },
  {
    name: 'Chicago Blackhawks',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: 'United Center',
    address: '1901 W Madison St, Chicago, IL 60612',
  },
  {
    name: 'Colorado Avalanche',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: 'Ball Arena',
    address: '1000 Chopper Cir, Denver, CO 80204',
  },
  {
    name: 'Dallas Stars',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: 'American Airlines Center',
    address: '2500 Victory Ave., Dallas, TX 75219',
  },
  {
    name: 'Minnesota Wild',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: 'Xcel Energy Center',
    address: '199 W Kellogg Blvd, St Paul, MN 55102',
  },
  {
    name: 'Nashville Predators',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: 'Bridgestone Arena',
    address: '501 Broadway, Nashville, TN 37203',
  },
  {
    name: 'St.Louis Blues',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: 'Enterprise Center',
    address: '1401 Clark Ave, St. Louis, MO 63103',
  },
  {
    name: 'Winnipeg Jets',
    conference: NhlConference.Western,
    division: NhlDivision.Central,
    venue: 'Canada Life Centre',
    address: '223 Carlton St, Winnipeg, MB R3C 5S6, Canada',
  },
];

const westernConferencePacificDivisionTeamDetails: TeamDetails[] = [
  {
    name: 'Anaheim Ducks',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: 'Honda Center',
    address: '2695 E Katella Ave, Anaheim, CA 92806',
  },
  {
    name: 'Calgary Flames',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: 'Scotiabank Saddledome',
    address: '555 Saddledome Rise SE, Calgary, AB T2G 2W1, Canada',
  },
  {
    name: 'Edmonton Oilers',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: 'Rogers Place',
    address: '10220 104 Ave NW, Edmonton, AB T5J 0H6, Canada',
  },
  {
    name: 'Los Angeles Kings',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: 'Crypto.com Arena',
    address: '1111 S Figueroa St, Los Angeles, CA 90015',
  },
  {
    name: 'San Jose Sharks',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: 'SAP Center at San Jose',
    address: '525 W Santa Clara St, San Jose, CA 95113',
  },
  {
    name: 'Seattle Kraken',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: 'Climate Pledge Arena',
    address: '334 1st Ave N, Seattle, WA 98109',
  },
  {
    name: 'Vancouver Canucks',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: 'Rogers Arena',
    address: '800 Griffiths Way, Vancouver, BC V6B 6G1, Canada',
  },
  {
    name: 'Las Vegas Golden Knights',
    conference: NhlConference.Western,
    division: NhlDivision.Pacific,
    venue: 'T-Mobile Arena',
    address: '3780 Las Vegas Blvd S, Las Vegas, NV 89158',
  },
];

export const nhlTeamDetails: TeamDetails[] = [
  ...easternConferenceAtlanticDivisionTeamDetails,
  ...easternConferenceMetropolitanDivisionTeamDetails,
  ...westernConferenceCentralDivisionTeamDetails,
  ...westernConferencePacificDivisionTeamDetails,
];
