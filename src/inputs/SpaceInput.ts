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
  skin: string;
  terms: string;
  twitter: string;
  blockchain: string;
}

export interface SpaceInput {
  from: string;
  space: string;
  timestamp: number;
  settings: SpaceSettingsInput;
}
