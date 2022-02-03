import { GuideQuestion } from '../models/GuideModel';

export interface GuideStepInput {
  content: string;
  name: string;
  order: number;
  questions: GuideQuestion[];
  uuid: string;
}

export interface GuideInput {
  from: string;
  categories: string[];
  content: string;
  name: string;
  space: string;
  steps: GuideStepInput[];
  thumbnail?: string;
  timestamp?: number;
  uuid: string;
}
