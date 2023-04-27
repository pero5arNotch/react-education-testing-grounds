import { useState, memo, useEffect, useCallback } from 'react';

function Cell(props) {
  const { title, color, style, onChange, totalCount, counter: parentCounter } = props;

  const [counter, setCounter] = useState(parentCounter ?? 0);

  useEffect(() => {
    onChange(title, counter);
  }, [title, counter, onChange]);

  const handleClick = useCallback(() => {
    setCounter((oldValue) => oldValue + 1);
  }, []);

  console.log(`UPDATE: Cell ${title}`);
  return (
    <div
      style={{ backgroundColor: color, ...style }}
      onClick={handleClick}
    >
      <h2>{title}</h2>
      <span>Ćelija je kliknuta {counter} / {totalCount} puta.</span>
    </div>
  );
}

export default memo(Cell);