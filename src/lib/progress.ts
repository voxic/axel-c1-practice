import { flashcards } from '../data/flashcards'
import { questions } from '../data/questions'
import { topics } from '../data/topics'
import type {
  FlashStat,
  ProgressState,
  Question,
  QuizMode,
  TopicId,
} from '../types'

export function recordAnswer(
  state: ProgressState,
  questionId: string,
  correct: boolean,
): ProgressState {
  const prev = state.answered[questionId]
  const next = {
    correctCount: (prev?.correctCount ?? 0) + (correct ? 1 : 0),
    wrongCount: (prev?.wrongCount ?? 0) + (correct ? 0 : 1),
    lastResult: correct ? ('correct' as const) : ('wrong' as const),
    lastAt: Date.now(),
  }
  return {
    ...state,
    answered: { ...state.answered, [questionId]: next },
  }
}

export function recordQuiz(
  state: ProgressState,
  topicId: TopicId | 'mixed' | 'weak',
  score: number,
  total: number,
): ProgressState {
  const history = [
    { at: Date.now(), topicId, score, total },
    ...state.quizHistory,
  ].slice(0, 20)
  return {
    ...state,
    lastTopicId: topicId === 'mixed' || topicId === 'weak' ? state.lastTopicId : topicId,
    lastQuizAt: Date.now(),
    quizHistory: history,
  }
}

export function recordFlashcard(
  state: ProgressState,
  cardId: string,
  known: boolean,
): ProgressState {
  const prev: FlashStat | undefined = state.flashcards[cardId]
  return {
    ...state,
    flashcards: {
      ...state.flashcards,
      [cardId]: {
        known: (prev?.known ?? 0) + (known ? 1 : 0),
        unknown: (prev?.unknown ?? 0) + (known ? 0 : 1),
        lastAt: Date.now(),
      },
    },
  }
}

export function isWeakQuestion(state: ProgressState, questionId: string): boolean {
  const stat = state.answered[questionId]
  if (!stat) return false
  return stat.wrongCount > 0 && stat.wrongCount >= stat.correctCount
}

export function weakQuestions(state: ProgressState): Question[] {
  return questions.filter((q) => isWeakQuestion(state, q.id))
}

export function topicStats(state: ProgressState, topicId: TopicId) {
  const topicQuestions = questions.filter((q) => q.topicId === topicId)
  let seen = 0
  let correct = 0
  let wrong = 0
  for (const q of topicQuestions) {
    const stat = state.answered[q.id]
    if (!stat) continue
    seen += 1
    correct += stat.correctCount
    wrong += stat.wrongCount
  }
  const attempts = correct + wrong
  const accuracy = attempts === 0 ? null : Math.round((correct / attempts) * 100)
  return {
    total: topicQuestions.length,
    seen,
    attempts,
    accuracy,
    remaining: topicQuestions.length - seen,
  }
}

export function overallStats(state: ProgressState) {
  const total = questions.length
  let seen = 0
  let correct = 0
  let wrong = 0
  for (const q of questions) {
    const stat = state.answered[q.id]
    if (!stat) continue
    seen += 1
    correct += stat.correctCount
    wrong += stat.wrongCount
  }
  const attempts = correct + wrong
  const accuracy = attempts === 0 ? null : Math.round((correct / attempts) * 100)
  const weak = weakQuestions(state).length
  const cardsSeen = Object.keys(state.flashcards).length
  return {
    total,
    seen,
    attempts,
    accuracy,
    weak,
    cardsSeen,
    cardsTotal: flashcards.length,
    quizzes: state.quizHistory.length,
  }
}

export function recommendedTopic(state: ProgressState): TopicId {
  const unstarted = topics.find((t) => topicStats(state, t.id).seen === 0)
  if (unstarted) return unstarted.id

  let worst: TopicId = topics[0].id
  let worstScore = 101
  for (const t of topics) {
    const stats = topicStats(state, t.id)
    const score = stats.accuracy ?? 0
    if (score < worstScore) {
      worstScore = score
      worst = t.id
    }
  }
  return worst
}

export const MIXED_QUIZ_SIZE = 8

export function pickQuestions(
  mode: QuizMode,
  topicId: TopicId | undefined,
  state: ProgressState,
): Question[] {
  if (mode === 'weak') {
    return shuffle(weakQuestions(state))
  }
  if (mode === 'topic' && topicId) {
    return shuffle(questions.filter((q) => q.topicId === topicId))
  }
  return shuffle(questions).slice(0, MIXED_QUIZ_SIZE)
}

export function shuffle<T>(items: T[], salt = Date.now()): T[] {
  const copy = [...items]
  let t = salt + copy.length
  for (let i = copy.length - 1; i > 0; i -= 1) {
    t = (t * 1664525 + 1013904223) >>> 0
    const j = t % (i + 1)
    const tmp = copy[i]
    copy[i] = copy[j]
    copy[j] = tmp
  }
  return copy
}

export function getTopic(id: TopicId) {
  return topics.find((t) => t.id === id)
}

export function formatRelative(ts: number | null): string {
  if (!ts) return 'Not yet'
  const delta = Date.now() - ts
  const mins = Math.floor(delta / 60000)
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins} min ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}
