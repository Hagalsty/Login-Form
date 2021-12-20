function Button({ type, onClick, text, required }) {
  return (
    <button type={type} onClick={onClick} disabled={required}>
      {text}
    </button>
  );
}

export default Button;
