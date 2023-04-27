import { useState, useCallback } from 'react';
import Cell from './Cell';

function Content() {
  const [totalCount, setTotalCount] = useState(0);
  // const handleClick = () => setTotalCount((oldValue) => oldValue + 1);
  const handleClick = useCallback(() => setTotalCount((oldValue) => oldValue + 1), []);

  console.log('UPDATE: Content');
  return (
    <div className="content" style={{ color: 'white', textAlign: 'center' }}>
      <Cell title="A" color="#F3A712" totalCount={0} onClick={handleClick} />
      <Cell title="B" color="#FF0054" totalCount={0} onClick={handleClick} />
      <Cell title="C" color="#3772FF" totalCount={0} onClick={handleClick} />
      <Cell title="D" color="#BAA898" totalCount={0} onClick={handleClick} />
    </div>
  );
}

export default Content;