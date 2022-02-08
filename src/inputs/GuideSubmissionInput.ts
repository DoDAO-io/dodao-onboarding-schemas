export interface GuideQuestionSubmission {
  selectedAnswerKeys: string[];
  uuid: string;
}

export interface GuideStepSubmission {
  questionResponses: GuideQuestionSubmission[];
  uuid: string;
}

export interface GuideSubmissionInput {
  from: string;
  timestamp: number;
  uuid: string;
  guideUuid: string;
  steps: GuideStepSubmission[];
}
