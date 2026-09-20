import { Link } from 'react-router-dom'
import { topics } from '../data/topics'
import { useProgress } from '../lib/progress-context'
import { topicStats } from '../lib/progress'

export function Topics() {
  const { state } = useProgress()

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">C1 syllabus themes</p>
        <h1>Topics</h1>
        <p className="lede">
          Seven themes aligned to medeltung lastbil theory. UI in English; terms
          and quiz wording in Swedish.
        </p>
      </header>
      <ul className="topic-grid">
        {topics.map((t, i) => {
          const stats = topicStats(state, t.id)
          return (
            <li key={t.id}>
              <Link to={`/topics/${t.id}`} className="topic-card">
                <span className="topic-idx" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2>{t.titleSv}</h2>
                <p>{t.blurb}</p>
                <p className="topic-meta">
                  {stats.seen === 0
                    ? `${stats.total} questions · not started`
                    : `${stats.accuracy ?? 0}% · ${stats.seen}/${stats.total} seen`}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
