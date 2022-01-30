export interface SpaceSettingsInput {
  avatar: string;
  about: string;
  admins: string[];
  creator: string;
  categories: string[];
  github: string;
  members: string[];
  mission: string;
  network: string;
  terms: string;
  twitter: string;
}

export interface SpaceInput {
  from: string;
  space: string;
  timestamp: number;
  settings: SpaceSettingsInput;
}
