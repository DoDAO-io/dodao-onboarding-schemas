import { GuideModel } from 'models/GuideModel';
import { SpaceModel } from 'models/SpaceModel';

export interface GuideBundleModel {
  id: string;
  authors: string[];
  categories: string[];
  excerpt: string;
  content: string;
  discordWebhook?: string;
  ipfs: string;
  name: string;
  previousId: string | null;
  space: SpaceModel;
  guides: GuideModel[];
  thumbnail?: string;
  timestamp?: number;
  uuid: string;
  version: number;
}
