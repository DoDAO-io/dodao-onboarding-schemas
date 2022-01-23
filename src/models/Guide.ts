export enum QuestionType {
  SingleChoice = 'SingleChoice',
  MultipleChoice = 'MultipleChoice'
}

export interface QuestionChoice {
  key: string;
  content: string;
  order: number;
}

export interface GuideQuestion {
  id: string;
  description: string;
  choices: QuestionChoice[];
  answerKeys: string[];
  type: QuestionType;
  order: number;
}

export interface GuideStep {
  id: string;
  name: string;
  content: string;
  choices: GuideQuestion[];
  order: number;
}

export interface Guide {
  from?: string;
  space: string;
  timestamp?: number;
  name: string;
  excerpt: string;
  steps: GuideStep[];
  network: string;
  metadata: string;
}
