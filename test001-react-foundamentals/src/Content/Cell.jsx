import { useState, memo, useEffect } from 'react';

function Cell(props) {
  const { title, color, style, onChange, totalCount, counter: parentCounter } = props;

  const [counter, setCounter] = useState(parentCounter);

  useEffect(() => {
    onChange(title, counter);
  }, [title, counter, onChange]);

  console.log(`UPDATE: Cell ${title}`);
  return (
    <div
      style={{ backgroundColor: color, ...style }}
      onClick={() => {
        setCounter((oldValue) => oldValue + 1);
        // onClick(title);
      }}
    >
      <h2>{title}</h2>
      <span>Ćelija je kliknuta {counter} / {totalCount} puta.</span>
    </div>
  );
}

export default memo(Cell);