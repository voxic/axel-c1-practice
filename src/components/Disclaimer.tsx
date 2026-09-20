export function Disclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={compact ? 'disclaimer compact' : 'disclaimer'} role="note">
      <strong>Not the official exam.</strong>
      {compact ? (
        <span>
          {' '}
          Invented practice items in Trafikverket-style Swedish. Verify against
          official sources.
        </span>
      ) : (
        <p>
          These questions and cards are original practice items written for Emil.
          They follow published C1 / grupp 2 rules, but they are not Trafikverket
          or Transportstyrelsen exam questions. Always verify against official
          sources before the real test.
        </p>
      )}
    </aside>
  )
}
