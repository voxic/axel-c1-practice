import { Link, Navigate, useParams } from 'react-router-dom'
import { questionsByTopic } from '../data/questions'
import { flashcardsByTopic } from '../data/flashcards'
import { getTopic, topicStats } from '../lib/progress'
import { useProgress } from '../lib/progress-context'
import type { TopicId } from '../types'

const ids: TopicId[] = [
  'behorighet',
  'fordon',
  'lastsakring',
  'trafikregler',
  'miljo',
  'personliga',
  'vilotider',
]

export function Topic() {
  const { topicId } = useParams()
  const { state } = useProgress()
  const valid = Boolean(topicId && ids.includes(topicId as TopicId))
  const id = (valid ? topicId : undefined) as TopicId | undefined
  const topic = id ? getTopic(id) : undefined
  const stats = id ? topicStats(state, id) : null

  if (!id || !topic || !stats) {
    return <Navigate to="/topics" replace />
  }
  const qCount = questionsByTopic(id).length
  const cCount = flashcardsByTopic(id).length

  return (
    <div className="page topic-page">
      <p className="crumb">
        <Link to="/topics">Topics</Link>
        <span aria-hidden="true"> / </span>
        <span>{topic.titleEn}</span>
      </p>
      <header className="page-head">
        <p className="eyebrow">{topic.titleEn}</p>
        <h1>{topic.titleSv}</h1>
        <p className="lede">{topic.blurb}</p>
      </header>

      <div className="hero-actions">
        <Link className="btn primary" to={`/quiz/${id}`}>
          Quiz · {qCount} questions
        </Link>
        <Link className="btn ghost" to={`/cards/${id}`}>
          Flashcards · {cCount}
        </Link>
      </div>

      <p className="muted topic-progress">
        {stats.seen === 0
          ? 'No attempts on this topic yet.'
          : `${stats.accuracy ?? 0}% accuracy across ${stats.attempts} answers · ${stats.remaining} still unseen.`}
      </p>

      <section className="panel" aria-labelledby="notes-heading">
        <h2 id="notes-heading">Study notes</h2>
        <ul className="notes">
          {topic.studyNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
