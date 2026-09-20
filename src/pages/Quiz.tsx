import { useEffect, useId, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Disclaimer } from '../components/Disclaimer'
import { topics } from '../data/topics'
import { useProgress } from '../lib/progress-context'
import { pickQuestions } from '../lib/progress'
import { loadProgress } from '../lib/storage'
import type { Question, QuizMode, TopicId } from '../types'

const topicIds: TopicId[] = [
  'behorighet',
  'fordon',
  'lastsakring',
  'trafikregler',
  'miljo',
  'personliga',
  'vilotider',
]

export function Quiz() {
  const { scope } = useParams()
  const parsed = parseScope(scope)
  const [seed, setSeed] = useState(0)
  if (!parsed) return <Navigate to="/topics" replace />

  return (
    <QuizSession
      key={`${parsed.mode}-${parsed.topicId ?? ''}-${seed}`}
      mode={parsed.mode}
      topicId={parsed.topicId}
      onRestart={() => setSeed((n) => n + 1)}
    />
  )
}

function parseScope(
  scope: string | undefined,
): { mode: QuizMode; topicId?: TopicId } | null {
  if (!scope || scope === 'mixed') return { mode: 'mixed' }
  if (scope === 'weak') return { mode: 'weak' }
  if (topicIds.includes(scope as TopicId)) {
    return { mode: 'topic', topicId: scope as TopicId }
  }
  return null
}

function QuizSession({
  mode,
  topicId,
  onRestart,
}: {
  mode: QuizMode
  topicId?: TopicId
  onRestart: () => void
}) {
  const { answer, finishQuiz } = useProgress()
  const deck = useMemo(
    () => pickQuestions(mode, topicId, loadProgress()),
    [mode, topicId],
  )

  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [missed, setMissed] = useState<Question[]>([])
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const liveId = useId()

  if (mode === 'weak' && deck.length === 0) {
    return (
      <div className="page">
        <header className="page-head">
          <p className="eyebrow">Weak spots</p>
          <h1>Nothing weak yet</h1>
          <p className="lede">
            Miss a question in a topic or mixed quiz and it lands here. Accuracy
            recovers after you answer it correctly at least as often as you miss
            it.
          </p>
        </header>
        <Link className="btn primary" to="/quiz/mixed">
          Take a mixed quiz
        </Link>
      </div>
    )
  }

  if (deck.length === 0) {
    return (
      <div className="page">
        <h1>No questions in this set</h1>
        <Link to="/topics">Back to topics</Link>
      </div>
    )
  }

  const q = deck[index]
  const heading = headingFor(mode, topicId)

  function choose(i: number) {
    if (picked !== null || !q) return
    const correct = i === q.correctIndex
    setPicked(i)
    answer(q.id, correct)
    if (correct) setScore((s) => s + 1)
    else setMissed((m) => [...m, q])
  }

  function next() {
    if (index + 1 >= deck.length) {
      const finalScore = deck.length - missed.length
      const recordFor: TopicId | 'mixed' | 'weak' =
        mode === 'weak' ? 'weak' : mode === 'mixed' ? 'mixed' : (topicId ?? 'mixed')
      finishQuiz(recordFor, finalScore, deck.length)
      setDone(true)
      return
    }
    setIndex((n) => n + 1)
    setPicked(null)
  }

  function restart() {
    onRestart()
  }

  if (done) {
    const pct = Math.round((score / deck.length) * 100)
    return (
      <div className="page quiz-done">
        <header className="page-head">
          <p className="eyebrow">{heading}</p>
          <h1>
            {score}/{deck.length} · {pct}%
          </h1>
          <p className="lede">
            {pct >= 80
              ? 'Solid. Review any misses, then move to a weaker topic.'
              : 'Mark the misses, read the notes, then run this set again.'}
          </p>
        </header>
        {missed.length > 0 ? (
          <section className="panel" aria-labelledby="missed-heading">
            <h2 id="missed-heading">Missed</h2>
            <ol className="review-list">
              {missed.map((item) => (
                <li key={item.id}>
                  <p className="review-q">{item.prompt}</p>
                  <p>
                    <span className="tag ok">Rätt:</span> {item.options[item.correctIndex]}
                  </p>
                  <p className="muted">{item.explanation}</p>
                </li>
              ))}
            </ol>
          </section>
        ) : (
          <p className="empty-note">No misses this round.</p>
        )}
        <div className="hero-actions">
          <button type="button" className="btn primary" onClick={restart}>
            Again
          </button>
          {missed.length > 0 ? (
            <Link className="btn amber" to="/weak">
              Practice weak
            </Link>
          ) : null}
          <Link className="btn ghost" to="/topics">
            Topics
          </Link>
        </div>
        <Disclaimer compact />
      </div>
    )
  }

  const letters = ['A', 'B', 'C', 'D'] as const
  const feedback =
    picked === null
      ? ''
      : picked === q.correctIndex
        ? 'Correct.'
        : `Incorrect. Rätt svar: ${q.options[q.correctIndex]}`

  return (
    <div className="page quiz">
      <header className="quiz-head">
        <p className="eyebrow">{heading}</p>
        <p className="progress-line" aria-live="polite">
          Question {index + 1} of {deck.length}
        </p>
        <div className="bar" aria-hidden="true">
          <span style={{ width: `${((index + (picked !== null ? 1 : 0)) / deck.length) * 100}%` }} />
        </div>
      </header>

      <form
        className="question"
        onSubmit={(e) => {
          e.preventDefault()
          if (picked !== null) next()
        }}
      >
        <h1>{q.prompt}</h1>
        <div className="options" role="radiogroup" aria-label="Answer options" aria-describedby={liveId}>
          {q.options.map((opt, i) => {
            const selected = picked === i
            const reveal = picked !== null
            const isCorrect = i === q.correctIndex
            let cls = 'option'
            if (reveal && isCorrect) cls += ' correct'
            if (reveal && selected && !isCorrect) cls += ' wrong'
            if (selected) cls += ' selected'
            return (
              <button
                key={opt}
                type="button"
                role="radio"
                aria-checked={selected}
                className={cls}
                disabled={picked !== null}
                onClick={() => choose(i)}
              >
                <span className="opt-letter">{letters[i]}</span>
                <span>{opt}</span>
              </button>
            )
          })}
        </div>
        <div className="feedback" id={liveId} aria-live="polite">
          {picked !== null ? (
            <>
              <p className={picked === q.correctIndex ? 'ok-text' : 'bad-text'}>
                {feedback}
              </p>
              <p>{q.explanation}</p>
            </>
          ) : (
            <p className="muted">Choose an answer. 1–4 also work on a keyboard.</p>
          )}
        </div>
        <div className="hero-actions">
          <button
            type="submit"
            className="btn primary"
            disabled={picked === null}
          >
            {index + 1 >= deck.length ? 'See score' : 'Next question'}
          </button>
        </div>
      </form>
      <KeyBinder disabled={picked !== null} onPick={choose} />
      <Disclaimer compact />
    </div>
  )
}

function headingFor(mode: QuizMode, topicId?: TopicId): string {
  if (mode === 'weak') return 'Practice weak'
  if (mode === 'mixed') return 'Mixed C1 quiz'
  return topics.find((t) => t.id === topicId)?.titleSv ?? 'Quiz'
}

function KeyBinder({
  disabled,
  onPick,
}: {
  disabled: boolean
  onPick: (i: number) => void
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (disabled) return
      const map: Record<string, number> = {
        '1': 0,
        '2': 1,
        '3': 2,
        '4': 3,
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        A: 0,
        B: 1,
        C: 2,
        D: 3,
      }
      if (e.key in map) {
        e.preventDefault()
        onPick(map[e.key])
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [disabled, onPick])
  return null
}
