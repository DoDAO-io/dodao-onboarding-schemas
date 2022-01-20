enum QuestionType {
  SingleChoice = 'SingleChoice',
  MultipleChoice = 'MultipleChoice'
}

interface GuideQuestionChoice {
  key: string;
  content: string;
}

interface GuideQuestion {
  description: string;
  choices: GuideQuestionChoice[];
  answerKeys: string[];
  type: QuestionType;
}

interface GuideStep {
  name: string;
  content: string;
  order: number;
  questions: GuideQuestion[];
}

interface Guide {
  name: string;
  excerpt: string;
  steps: GuideStep[];
}
