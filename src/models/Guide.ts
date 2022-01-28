export enum QuestionType {
  SingleChoice = 'SingleChoice',
  MultipleChoice = 'MultipleChoice'
}

export interface QuestionChoice {
  content: string;
  key: string;
  order: number;
}

export interface GuideQuestion {
  answerKeys: string[];
  choices: QuestionChoice[];
  content: string;
  order: number;
  questionType: QuestionType;
  uuid: string;
}

export interface GuideStep {
  content: string;
  id?: string;
  name: string;
  order: number;
  questions: GuideQuestion[];
  uuid: string;
}

export interface NetworkMetadata {
  network: string;
}

export interface Guide {
  previous_id: string | null;
  content: string;
  authors: string[];
  id: string;
  metadata: string | NetworkMetadata;
  name: string;
  space: string;
  steps: GuideStep[];
  timestamp?: number;
  uuid: string;
}

export type GuideWithoutSteps = Omit<Guide, 'steps'>;
