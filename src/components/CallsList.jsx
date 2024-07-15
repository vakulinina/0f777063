import { ArchiveButton } from './ArchiveButton.jsx'
import { CallCard } from './CallCard.jsx'

export const CallsList = ({
  calls,
  onButtonClick,
  onCardClick,
  buttonLabel,
}) => {
  return (
    <section className="calls-list">
      {!calls.length ? (
        <div className="no-calls">You have no calls</div>
      ) : (
        <>
          <ArchiveButton onClick={onButtonClick}>{buttonLabel}</ArchiveButton>

          {calls.map((call) => (
            <CallCard
              onClick={() => onCardClick({ id: call.id })}
              key={call.id}
              {...call}
            />
          ))}
        </>
      )}
    </section>
  )
}
