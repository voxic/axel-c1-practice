import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { ProgressState, TopicId } from '../types'
import { loadProgress, saveProgress } from './storage'
import { recordAnswer, recordFlashcard, recordQuiz } from './progress'

interface ProgressApi {
  state: ProgressState
  answer: (questionId: string, correct: boolean) => void
  finishQuiz: (
    topicId: TopicId | 'mixed' | 'weak',
    score: number,
    total: number,
  ) => void
  markCard: (cardId: string, known: boolean) => void
  reset: () => void
}

const ProgressContext = createContext<ProgressApi | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(() => loadProgress())

  const commit = useCallback((next: ProgressState) => {
    setState(next)
    saveProgress(next)
  }, [])

  const api = useMemo<ProgressApi>(
    () => ({
      state,
      answer: (questionId, correct) =>
        commit(recordAnswer(state, questionId, correct)),
      finishQuiz: (topicId, score, total) =>
        commit(recordQuiz(state, topicId, score, total)),
      markCard: (cardId, known) => commit(recordFlashcard(state, cardId, known)),
      reset: () => {
        const empty = {
          version: 1 as const,
          answered: {},
          flashcards: {},
          lastTopicId: null,
          lastQuizAt: null,
          quizHistory: [],
        }
        commit(empty)
      },
    }),
    [state, commit],
  )

  return (
    <ProgressContext.Provider value={api}>{children}</ProgressContext.Provider>
  )
}

export function useProgress(): ProgressApi {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider')
  return ctx
}
