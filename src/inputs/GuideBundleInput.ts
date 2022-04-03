export interface GuideModelInput {
  order: number;
  uuid: string;
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
  guides: GuideModelInput[];
  thumbnail?: string;
  timestamp?: number;
  uuid: string;
}
