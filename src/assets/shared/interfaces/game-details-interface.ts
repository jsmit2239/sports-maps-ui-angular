import { VenueDetails } from './venue-details-interface';

export interface GameDetails {
  date: string;
  time: string;
  awayTeam: string;
  homeTeam: string;

  specialVenueDetails?: VenueDetails;
}
