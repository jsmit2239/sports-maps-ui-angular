import {
  MlbDivision,
  MlbLeague,
} from 'src/assets/baseball/mlb/enums/mlb-enums';
import {
  NbaConference,
  NbaDivision,
} from 'src/assets/basketball/nba/enums/nba-enum';
import {
  NflConference,
  NflDivision,
} from 'src/assets/football/nfl/enums/nfl-enum';
import {
  AhlConference,
  AhlDivision,
} from 'src/assets/hockey/ahl/enums/ahl-enum';
import { NhlConference, NhlDivision } from '../../hockey/nhl/enums/nhl-enum';

type ValidConferencesType =
  | NhlConference
  | NbaConference
  | NflConference
  | AhlConference;
type ValidLeaguesType = MlbLeague;
type ValidDivisionsType =
  | NhlDivision
  | MlbDivision
  | NbaDivision
  | NflDivision
  | AhlDivision;

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
