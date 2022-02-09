import { GuideStepSubmission } from 'models/GuideSubmissionModel';

export interface GuideSubmissionInput {
  from: string;
  timestamp: string;
  uuid: string;
  guideUuid: string;
  space: string;
  steps: GuideStepSubmission[];
}
