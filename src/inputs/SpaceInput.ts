export interface SpaceSettingsInput {
  avatar?: string;
  admins: string[];
  categories: string[];
  github: string;
  members: string[];
  network: string;
  terms: string;
  twitter: string;
}

export interface SpaceInput {
  from: string;
  space: string;
  timestamp: number;
  settings: string;
}
