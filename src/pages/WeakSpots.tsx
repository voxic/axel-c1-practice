import { Link } from 'react-router-dom'
import { topics } from '../data/topics'
import { useProgress } from '../lib/progress-context'
import { isWeakQuestion, weakQuestions } from '../lib/progress'

export function WeakSpots() {
  const { state, reset } = useProgress()
  const weak = weakQuestions(state)
  const grouped = topics
    .map((t) => ({
      topic: t,
      items: weak.filter((q) => q.topicId === t.id),
    }))
    .filter((g) => g.items.length > 0)

  const answeredIds = Object.keys(state.answered)
  const recovered = answeredIds.filter((id) => {
    const stat = state.answered[id]
    return stat && stat.wrongCount > 0 && !isWeakQuestion(state, id)
  }).length

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Missed more than mastered</p>
        <h1>Weak spots</h1>
        <p className="lede">
          A question stays weak while wrong answers are at least as many as
          correct ones. Get it right enough times and it leaves this list.
        </p>
      </header>

      {weak.length === 0 ? (
        <section className="panel">
          <h2>Clear list</h2>
          <p>
            {recovered > 0
              ? `You have recovered ${recovered} previously missed item${recovered === 1 ? '' : 's'}. Keep a mixed quiz in the rotation.`
              : 'No weak items yet. Take a quiz — misses will show up here.'}
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/quiz/mixed">
              Mixed quiz
            </Link>
            <Link className="btn ghost" to="/topics">
              Browse topics
            </Link>
          </div>
        </section>
      ) : (
        <>
          <div className="hero-actions">
            <Link className="btn amber" to="/quiz/weak">
              Practice weak · {weak.length}
            </Link>
          </div>
          {grouped.map(({ topic, items }) => (
            <section key={topic.id} className="panel" aria-labelledby={`w-${topic.id}`}>
              <h2 id={`w-${topic.id}`}>{topic.titleSv}</h2>
              <ul className="weak-list">
                {items.map((q) => {
                  const stat = state.answered[q.id]
                  return (
                    <li key={q.id}>
                      <p>{q.prompt}</p>
                      <p className="muted">
                        Wrong {stat?.wrongCount ?? 0} · Right {stat?.correctCount ?? 0}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </>
      )}

      <section className="panel danger-panel">
        <h2>Reset this device</h2>
        <p className="muted">
          Clears quiz history, weak spots and flashcard marks stored in
          localStorage. Cannot be undone.
        </p>
        <button
          type="button"
          className="btn ghost"
          onClick={() => {
            if (
              window.confirm(
                'Reset all Axel C1 progress on this device? This cannot be undone.',
              )
            ) {
              reset()
            }
          }}
        >
          Reset progress
        </button>
      </section>
    </div>
  )
}
