import { NhlConference, NhlDivision } from '../../hockey/nhl/enums/nhl-enum';

export interface TeamDetails {
  abbreviation: string;
  name: string;
  conference: NhlConference;
  division: NhlDivision;
  venue: VenueDetails;
  icon: IconDetails;
}

interface VenueDetails {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

interface IconDetails {
  svgTitle: string;
}
