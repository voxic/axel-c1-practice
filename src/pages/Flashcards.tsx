import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { flashcards, flashcardsByTopic } from '../data/flashcards'
import { topics } from '../data/topics'
import { useProgress } from '../lib/progress-context'
import { shuffle } from '../lib/progress'
import type { TopicId } from '../types'

const topicIds: TopicId[] = [
  'behorighet',
  'fordon',
  'lastsakring',
  'trafikregler',
  'miljo',
  'personliga',
  'vilotider',
]

export function Flashcards() {
  const { topicId } = useParams()
  if (topicId && topicId !== 'all' && !topicIds.includes(topicId as TopicId)) {
    return <Navigate to="/cards" replace />
  }
  const scope = !topicId || topicId === 'all' ? 'all' : (topicId as TopicId)
  return <CardSession scope={scope} />
}

function CardSession({ scope }: { scope: TopicId | 'all' }) {
  const { markCard } = useProgress()
  const [seed, setSeed] = useState(0)
  const deck = useMemo(() => {
    const source = scope === 'all' ? flashcards : flashcardsByTopic(scope)
    return shuffle(source, seed)
  }, [scope, seed])

  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState(0)
  const [unknown, setUnknown] = useState(0)
  const [done, setDone] = useState(false)

  const card = deck[index]
  const title =
    scope === 'all'
      ? 'All cards'
      : (topics.find((t) => t.id === scope)?.titleSv ?? 'Cards')

  function grade(knew: boolean) {
    if (!card || !flipped) return
    markCard(card.id, knew)
    if (knew) setKnown((n) => n + 1)
    else setUnknown((n) => n + 1)
    if (index + 1 >= deck.length) {
      setDone(true)
      return
    }
    setIndex((n) => n + 1)
    setFlipped(false)
  }

  function restart() {
    setSeed((n) => n + 1)
    setIndex(0)
    setFlipped(false)
    setKnown(0)
    setUnknown(0)
    setDone(false)
  }

  if (deck.length === 0) {
    return (
      <div className="page">
        <h1>No cards in this topic</h1>
        <Link to="/cards">All cards</Link>
      </div>
    )
  }

  if (done) {
    return (
      <div className="page">
        <header className="page-head">
          <p className="eyebrow">{title}</p>
          <h1>Deck done</h1>
          <p className="lede">
            Knew {known} · Needs work {unknown} of {deck.length}. Unknown cards
            stay worth another pass.
          </p>
        </header>
        <div className="hero-actions">
          <button type="button" className="btn primary" onClick={restart}>
            Shuffle again
          </button>
          <Link className="btn ghost" to="/topics">
            Topics
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page cards-page">
      <header className="page-head">
        <p className="eyebrow">Flashcards · Swedish term first</p>
        <h1>{title}</h1>
        <p className="muted">
          {index + 1} / {deck.length}
          {scope === 'all' ? (
            <>
              {' · '}
              <TopicFilters current={scope} />
            </>
          ) : (
            <>
              {' · '}
              <Link to="/cards">All topics</Link>
            </>
          )}
        </p>
      </header>

      {scope === 'all' ? null : (
        <p className="filters">
          <TopicFilters current={scope} />
        </p>
      )}

      <button
        type="button"
        className={`flip-card ${flipped ? 'is-flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
      >
        <span className="flip-kicker">{flipped ? 'Meaning' : 'Term'}</span>
        <span className="flip-body">{flipped ? card.meaning : card.term}</span>
        <span className="flip-hint">
          {flipped ? 'Mark whether you knew it' : 'Tap or Enter to reveal the meaning'}
        </span>
      </button>

      <div className="hero-actions">
        <button
          type="button"
          className="btn ghost"
          onClick={() => grade(false)}
          disabled={!flipped}
        >
          Still shaky
        </button>
        <button
          type="button"
          className="btn primary"
          onClick={() => grade(true)}
          disabled={!flipped}
        >
          Knew it
        </button>
      </div>
    </div>
  )
}

function TopicFilters({ current }: { current: TopicId | 'all' }) {
  return (
    <span className="filter-links">
      <Link className={current === 'all' ? 'on' : undefined} to="/cards">
        All
      </Link>
      {topics.map((t) => (
        <Link
          key={t.id}
          className={current === t.id ? 'on' : undefined}
          to={`/cards/${t.id}`}
        >
          {t.titleSv.split(' ')[0]}
        </Link>
      ))}
    </span>
  )
}
