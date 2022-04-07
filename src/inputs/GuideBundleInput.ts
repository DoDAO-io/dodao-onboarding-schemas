export interface GuideInBundleInput {
  order: number;
  bundleUuid: string;
  guideUuid: string;
}

export interface GuideBundleInput {
  from: string;
  categories: string[];
  excerpt: string;
  content: string;
  discordWebhook?: string;
  name: string;
  space: string;
  bundleGuides: GuideInBundleInput[];
  thumbnail?: string;
  timestamp?: number;
  uuid: string;
}
