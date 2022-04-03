export enum StepItemSubmissionType {
  Question = 'Question',
  UserInput = 'UserInput'
}

export interface GuideStepItemSubmission {
  selectedAnswerKeys?: string[];
  userInput?: string;
  uuid: string;
  type: StepItemSubmissionType;
}

export interface GuideStepSubmission {
  itemResponses: GuideStepItemSubmission[];
  uuid: string;
}

export interface GuideSubmissionResult {
  correctQuestions: string[];
  wrongQuestions: string[];
  allQuestions: string[];
}
export interface GuideSubmission {
  id: string;
  ipfs: string;
  createdBy: string;
  guideId: string;
  guideIpfs: string;
  guideUuid: string;
  result: GuideSubmissionResult;
  spaceId: string;
  steps: GuideStepSubmission[];
  created: number;
  uuid: string;
}

export type GuideSubmissionWithoutSteps = Omit<GuideSubmission, 'steps'>;
