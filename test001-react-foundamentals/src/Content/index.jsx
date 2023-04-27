import { useState } from 'react';
import Cell from './Cell';

function Content() {
  const [totalCount, setTotalCount] = useState(0);
  const handleClick = () => setTotalCount((oldValue) => oldValue + 1);

  return (
    <div className="content" style={{ color: 'white', textAlign: 'center' }}>
      <Cell title="A" color="#F3A712" totalCount={totalCount} onClick={handleClick} />
      <Cell title="B" color="#FF0054" totalCount={totalCount} onClick={handleClick} />
      <Cell title="C" color="#3772FF" totalCount={totalCount} onClick={handleClick} />
      <Cell title="D" color="#BAA898" totalCount={totalCount} onClick={handleClick} />
    </div>
  );
}

export default Content;