import { SpaceModel } from './SpaceModel';

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

export enum InputType {
  PublicShortInput = 'PublicShortInput',
  PrivateShortInput = 'PrivateShortInput'
}

export interface UserInput {
  inputType: InputType;
  label: string;
  order: number;
  uuid: string;
}

export interface GuideStep {
  content: string;
  id?: string;
  name: string;
  order: number;
  questions: GuideQuestion[];
  userInputs: UserInput[];
  uuid: string;
}

export interface GuideModel {
  id: string;
  authors: string[];
  categories: string[];
  content: string;
  discordWebhook?: string;
  ipfs: string;
  name: string;
  previousId: string | null;
  space: SpaceModel;
  steps: GuideStep[];
  thumbnail?: string;
  timestamp?: number;
  uuid: string;
  version: number;
}

export type GuideWithoutSteps = Omit<GuideModel, 'steps'>;
