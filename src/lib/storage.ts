import type { ProgressState } from '../types'

const KEY = 'axel-c1-progress'
const THEME_KEY = 'axel-c1-theme'

export function emptyProgress(): ProgressState {
  return {
    version: 1,
    answered: {},
    flashcards: {},
    lastTopicId: null,
    lastQuizAt: null,
    quizHistory: [],
  }
}

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return emptyProgress()
    const parsed = JSON.parse(raw) as ProgressState
    if (parsed.version !== 1 || typeof parsed.answered !== 'object') {
      return emptyProgress()
    }
    return {
      ...emptyProgress(),
      ...parsed,
      answered: parsed.answered ?? {},
      flashcards: parsed.flashcards ?? {},
      quizHistory: parsed.quizHistory ?? [],
    }
  } catch {
    return emptyProgress()
  }
}

export function saveProgress(state: ProgressState): void {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export type Theme = 'light' | 'dark'

export function loadTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export function saveTheme(theme: Theme): void {
  localStorage.setItem(THEME_KEY, theme)
}
