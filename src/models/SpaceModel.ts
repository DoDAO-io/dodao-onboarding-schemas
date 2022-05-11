export interface SpaceModel {
  id: string;
  about?: string;
  admins: string[];
  avatar?: string;
  blockchain: string;
  categories: string[];
  creator: string;
  discordAccessToken?: string;
  discordGuildId?: string;
  github?: string;
  members: string[];
  mission: string;
  name: string;
  network: string;
  skin: string;
  terms?: string;
  twitter?: string;
}
