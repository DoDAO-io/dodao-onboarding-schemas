import { GuideModel } from 'models/GuideModel';
import { SpaceModel } from 'models/SpaceModel';

export interface GuideInBundleModel extends GuideModel {
  order: number;
}

export interface GuideBundleWithoutGuidesModel {
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
  thumbnail?: string;
  timestamp?: number;
  uuid: string;
  version: number;
}

export interface GuideBundleModel extends GuideBundleWithoutGuidesModel {
  bundleGuides: GuideInBundleModel[];
}
