import {
  MlbDivision,
  MlbLeague,
} from 'src/assets/baseball/mlb/enums/mlb-enums';
import { NhlConference, NhlDivision } from '../../hockey/nhl/enums/nhl-enum';

type ValidConferencesType = NhlConference;
type ValidLeaguesType = MlbLeague;
type ValidDivisionsType = NhlDivision | MlbDivision;

export interface TeamDetails {
  abbreviation: string;
  name: string;
  conference?: ValidConferencesType;
  league?: ValidLeaguesType;
  division?: ValidDivisionsType;
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

/**
Team Details Object Template:

  {
    abbreviation: '',
    name: '',
    league: ,
    division: ,
    venue: {
      name: '',
      address: '',
      latitude: ,
      longitude: ,
    },
    icon: {
      svgTitle: '',
    },
  },

 */
