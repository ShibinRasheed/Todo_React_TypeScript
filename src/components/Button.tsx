type Button = {
    children : string;
    className : string;
    onClick ?: () => void; 
}

export default function Button({children , className , onClick} : Button) {
  return (
    <button className={`${className}`} type="submit" onClick={onClick}>
      {children}
    </button>
  );
}
