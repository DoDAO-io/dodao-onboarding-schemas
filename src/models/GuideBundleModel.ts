import { GuideModel, GuidePublishStatus } from 'models/GuideModel';
import { SpaceModel } from 'models/SpaceModel';

export interface GuideInBundleModel extends GuideModel {
  order: number;
}

export enum GuideBundleType {
  Onboarding = 'Onboarding',
  HowTo = 'HowTo',
  LevelUp = 'LevelUp'
}

export interface GuideBundleWithoutGuidesModel {
  id: string;
  authors: string[];
  bundleType: GuideBundleType;
  categories: string[];
  excerpt: string;
  content: string;
  discordWebhook?: string;
  ipfs: string;
  name: string;
  previousId: string | null;
  publishStatus: GuidePublishStatus;
  socialShareImage?: string;
  space: SpaceModel;
  thumbnail?: string;
  timestamp?: number;
  uuid: string;
  version: number;
}

export interface GuideBundleModel extends GuideBundleWithoutGuidesModel {
  bundleGuides: GuideInBundleModel[];
}
