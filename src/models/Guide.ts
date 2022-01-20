enum QuestionType {
  SingleChoice = 'SingleChoice',
  MultipleChoice = 'MultipleChoice'
}

interface GuideQuestionChoice {
  key: string;
  content: string;
}

interface GuideQuestion {
  id: string;
  description: string;
  choices: GuideQuestionChoice[];
  answerKeys: string[];
  type: QuestionType;
  order: number;
}

interface GuideStep {
  title: string;
  content: string;
  order: number;
  questions: GuideQuestion[];
}

interface Guide {
  name: string;
  excerpt: string;
  steps: GuideStep[];
}
