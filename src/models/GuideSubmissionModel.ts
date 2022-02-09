export interface GuideQuestionSubmission {
  selectedAnswerKeys: string[];
  uuid: string;
}

export interface GuideStepSubmission {
  questionResponses: GuideQuestionSubmission[];
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
