import { GuideQuestion, GuideType, UserInput } from 'models/GuideModel';

export interface GuideStepInput {
  content: string;
  name: string;
  order: number;
  stepItems: GuideQuestion[] | UserInput[];
  uuid: string;
}

export interface GuideInput {
  from: string;
  categories: string[];
  content: string;
  discordWebhook?: string;
  guideType: GuideType;
  name: string;
  space: string;
  steps: GuideStepInput[];
  thumbnail?: string;
  timestamp?: number;
  uuid: string;
}
