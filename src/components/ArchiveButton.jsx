export const ArchiveButton = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      className="archive-button"
      data-disabled={disabled}
    >
      {children}
    </button>
  )
}
