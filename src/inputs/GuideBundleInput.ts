import { GuideBundleType } from 'models/GuideBundleModel';
import { GuidePublishStatus } from 'models/GuideModel';

export interface GuideInBundleInput {
  order: number;
  guideUuid: string;
}

export interface GuideBundleInput {
  bundleGuides: GuideInBundleInput[];
  bundleType: GuideBundleType;
  categories: string[];
  content: string;
  discordWebhook?: string;
  excerpt: string;
  from: string;
  name: string;
  publishStatus: GuidePublishStatus;
  socialShareImage?: string;
  space: string;
  thumbnail?: string;
  timestamp?: number;
  uuid: string;
}
