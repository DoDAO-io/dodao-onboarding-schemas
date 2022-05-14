import {
  GuidePublishStatus,
  GuideQuestion,
  GuideType,
  UserInput
} from 'models/GuideModel';

export interface GuideStepInput {
  content: string;
  name: string;
  order: number;
  stepItems: GuideQuestion[] | UserInput[];
  uuid: string;
}

export interface GuideInput {
  categories: string[];
  content: string;
  discordRoleIds: string[];
  discordWebhook?: string;
  from: string;
  guideType: GuideType;
  name: string;
  socialShareImage?: string;
  space: string;
  steps: GuideStepInput[];
  publishStatus: GuidePublishStatus;
  timestamp?: number;
  thumbnail?: string;
  uuid: string;
}
