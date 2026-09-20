import { Link } from 'react-router-dom'
import { Disclaimer } from '../components/Disclaimer'
import { ProgressRing } from '../components/ProgressRing'
import { topics } from '../data/topics'
import { useProgress } from '../lib/progress-context'
import {
  formatRelative,
  overallStats,
  recommendedTopic,
  topicStats,
} from '../lib/progress'

export function Home() {
  const { state } = useProgress()
  const overall = overallStats(state)
  const nextId = recommendedTopic(state)
  const next = topics.find((t) => t.id === nextId)!
  const nextStats = topicStats(state, nextId)
  const last = state.quizHistory[0]

  return (
    <div className="page home">
      <section className="hero">
        <p className="eyebrow">For Emil · grupp 2 · C1 only</p>
        <h1>C1 theory that sticks.</h1>
        <p className="lede">
          You already have B and körkortstillstånd grupp 2. Axel C1 drills the
          medeltung lastbil syllabus: behörighet, bromsar, lastsäkring, larger-vehicle
          rules, eco, you as the driver, and kör- och vilotider at awareness level.
        </p>
        <div className="hero-actions">
          <Link className="btn primary" to={`/topics/${nextId}`}>
            Next: {next.titleSv}
          </Link>
          <Link className="btn ghost" to="/quiz/mixed">
            Mixed quiz
          </Link>
        </div>
      </section>

      <section className="panel progress-panel" aria-labelledby="progress-heading">
        <div className="panel-head">
          <h2 id="progress-heading">Your progress</h2>
          <p className="muted">Saved on this device. Last quiz {formatRelative(state.lastQuizAt)}.</p>
        </div>
        <div className="rings">
          <ProgressRing value={overall.accuracy} label="Accuracy" />
          <ProgressRing
            value={Math.round((overall.seen / overall.total) * 100)}
            label={`${overall.seen}/${overall.total} seen`}
          />
          <ProgressRing
            value={Math.round((overall.cardsSeen / overall.cardsTotal) * 100)}
            label={`${overall.cardsSeen}/${overall.cardsTotal} cards`}
          />
        </div>
        {overall.seen === 0 ? (
          <p className="empty-note">
            No attempts yet. Start with the recommended topic or a mixed quiz of
            eight questions.
          </p>
        ) : (
          <ul className="stat-row">
            <li>
              <strong>{overall.weak}</strong>
              <span>weak items</span>
            </li>
            <li>
              <strong>{overall.quizzes}</strong>
              <span>quizzes logged</span>
            </li>
            <li>
              <strong>{overall.attempts}</strong>
              <span>answers given</span>
            </li>
          </ul>
        )}
        {last ? (
          <p className="last-quiz">
            Latest: {last.score}/{last.total} on {labelFor(last.topicId)}.
          </p>
        ) : null}
      </section>

      <section className="panel recommend" aria-labelledby="next-heading">
        <h2 id="next-heading">Recommended next</h2>
        <p>
          <strong>{next.titleSv}</strong> — {next.blurb}
        </p>
        <p className="muted">
          {nextStats.seen === 0
            ? 'You have not opened this topic yet.'
            : `${nextStats.accuracy ?? 0}% accuracy · ${nextStats.remaining} questions still unseen.`}
        </p>
        <div className="hero-actions">
          <Link className="btn primary" to={`/quiz/${nextId}`}>
            Practise this topic
          </Link>
          <Link className="btn ghost" to={`/cards/${nextId}`}>
            Flashcards
          </Link>
        </div>
      </section>

      {overall.weak > 0 ? (
        <section className="panel weak-cta">
          <h2>Weak spots</h2>
          <p>
            {overall.weak} question{overall.weak === 1 ? '' : 's'} marked weak
            after a miss. Drill those before they fossilise.
          </p>
          <Link className="btn amber" to="/weak">
            Practice weak
          </Link>
        </section>
      ) : null}

      <Disclaimer />
    </div>
  )
}

function labelFor(id: string): string {
  if (id === 'mixed') return 'mixed quiz'
  if (id === 'weak') return 'weak-spot quiz'
  return topics.find((t) => t.id === id)?.titleSv ?? id
}
