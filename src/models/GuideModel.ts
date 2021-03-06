import { SpaceModel } from './SpaceModel';

export enum QuestionType {
  SingleChoice = 'SingleChoice',
  MultipleChoice = 'MultipleChoice'
}

export enum InputType {
  PublicShortInput = 'PublicShortInput',
  PrivateShortInput = 'PrivateShortInput'
}

// These don't follow the naming convention as we used the type in url
export enum GuideType {
  Onboarding = 'onboarding',
  HowTo = 'how-to',
  LevelUp = 'level-up'
}

export enum GuidePublishStatus {
  Live = 'Live',
  Draft = 'Draft'
}

export const GuideTypesArray = [
  GuideType.Onboarding,
  GuideType.HowTo,
  GuideType.LevelUp
];

export interface GuideStepItem {
  // This is undefined for the old questions. The questions will have to be migrated
  type: InputType | QuestionType;
  order: number;
  uuid: string;
}

export interface QuestionChoice {
  content: string;
  key: string;
  order: number;
}

export interface GuideQuestion extends GuideStepItem {
  answerKeys: string[];
  choices: QuestionChoice[];
  content: string;
  questionType: QuestionType;
}

export interface UserInput extends GuideStepItem {
  label: string;
  required: boolean;
}

export interface GuideStep {
  content: string;
  id?: string;
  name: string;
  order: number;
  stepItems: (GuideQuestion | UserInput)[];
  uuid: string;
}

export interface GuideModel {
  id: string;
  authors: string[];
  categories: string[];
  content: string;
  discordRoleIds: string[];
  discordWebhook?: string;
  guideType: GuideType;
  ipfs: string;
  name: string;
  previousId: string | null;
  publishStatus: GuidePublishStatus;
  socialShareImage?: string;
  space: SpaceModel;
  steps: GuideStep[];
  thumbnail?: string;
  timestamp?: number;
  uuid: string;
  version: number;
}

export interface GudieInBundleModel extends GuideModel {
  order: number;
}

export type GuideWithoutSteps = Omit<GuideModel, 'steps'>;

export const isQuestion = (item: GuideStepItem) =>
  item.type === QuestionType.MultipleChoice ||
  item.type === QuestionType.SingleChoice;

export const isUserInput = (item: GuideStepItem) =>
  item.type === InputType.PublicShortInput ||
  item.type === InputType.PrivateShortInput;
