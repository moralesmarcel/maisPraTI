export default function Button({ children, variant = "solid", onClick, disabled }) {
  const className = `btn btn-${variant}`;
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
