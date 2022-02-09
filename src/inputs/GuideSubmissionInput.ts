import { GuideStepSubmission } from 'models/GuideSubmissionModel';

export interface GuideSubmissionInput {
  from: string;
  guideUuid: string;
  space: string;
  steps: GuideStepSubmission[];
  timestamp: string;
  uuid: string;
}
