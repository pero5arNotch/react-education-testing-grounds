import { useState, memo } from 'react';

function Cell(props) {
  const { title, color, onClick, totalCount } = props;

  const [counter, setCounter] = useState(0);

  console.log(`UPDATE: Cell ${title}`);
  return (
    <div
      style={{ backgroundColor: color, padding: '5%', height: '10em' }}
      onClick={() => {
        setCounter((oldValue) => oldValue + 1);
        onClick();
      }}
    >
      <h2>{title}</h2>
      <span>Čelija je kliknuta {counter} / {totalCount} puta.</span>
    </div>
  );
}

export default memo(Cell);