export type TopicId =
  | 'behorighet'
  | 'fordon'
  | 'lastsakring'
  | 'trafikregler'
  | 'miljo'
  | 'personliga'
  | 'vilotider'

export type QuizMode = 'topic' | 'mixed' | 'weak'

export interface Topic {
  id: TopicId
  titleSv: string
  titleEn: string
  blurb: string
  studyNotes: string[]
}

export interface Question {
  id: string
  topicId: TopicId
  prompt: string
  options: [string, string, string, string]
  correctIndex: 0 | 1 | 2 | 3
  explanation: string
}

export interface Flashcard {
  id: string
  topicId: TopicId
  term: string
  meaning: string
}

export interface AnswerStat {
  correctCount: number
  wrongCount: number
  lastResult: 'correct' | 'wrong'
  lastAt: number
}

export interface FlashStat {
  known: number
  unknown: number
  lastAt: number
}

export interface QuizRecord {
  at: number
  topicId: TopicId | 'mixed' | 'weak'
  score: number
  total: number
}

export interface ProgressState {
  version: 1
  answered: Record<string, AnswerStat>
  flashcards: Record<string, FlashStat>
  lastTopicId: TopicId | null
  lastQuizAt: number | null
  quizHistory: QuizRecord[]
}
