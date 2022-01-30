export interface SpaceModel {
  id: string;
  avatar?: string;
  creator: string;
  mission: string;
  name: string;
  network: string;
  admins: string[];
  members: string[];
  terms?: string;
}
