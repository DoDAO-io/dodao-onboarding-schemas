import { GuideQuestion } from '../models/GuideModel';

export interface GuideStepInput {
  content: string;
  name: string;
  order: number;
  questions: GuideQuestion[];
  uuid: string;
}

export interface GuideInput {
  author: string;
  content: string;
  name: string;
  space: string;
  steps: GuideStepInput[];
  timestamp?: number;
  uuid: string;
}
