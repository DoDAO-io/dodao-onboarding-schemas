export interface BundleGuideInput {
  order: number;
  uuid: string;
  guideUuid: string;
}

export interface BundleInput {
  from: string;
  categories: string[];
  excerpt: string;
  content: string;
  discordWebhook?: string;
  name: string;
  space: string;
  bundleGuides: BundleGuideInput[];
  thumbnail?: string;
  timestamp?: number;
  uuid: string;
}
