export interface GuideQuestionResponse {
  selectedAnswerKeys: string[];
  uuid: string;
}

export interface GuideStepResponse {
  questionResponses: GuideQuestionResponse[];
  uuid: string;
}

export interface GuideResponseInput {
  from: string;
  timestamp: number;
  uuid: string;
  steps: GuideStepResponse[];
}
