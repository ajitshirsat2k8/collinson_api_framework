export enum ActivityType {

  SKIING = "Skiing",

  SURFING = "Surfing",

  OUTDOOR_SIGHTSEEING =
    "Outdoor Sightseeing",

  INDOOR_SIGHTSEEING =
    "Indoor Sightseeing"
}

export enum SuitabilityLevel {

  HIGH = "High",

  MEDIUM = "Medium",

  LOW = "Low"
}

export interface ActivityRanking {

  date: string;

  activityName: ActivityType;

  suitability: SuitabilityLevel;

  reasoning: string;
}

export interface ActivityRankingResponse {

  city: string;

  forecastDays: number;

  rankings: ActivityRanking[];
}