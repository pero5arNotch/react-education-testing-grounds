import { useState, useCallback, useMemo } from 'react';
import Cell from './Cell';

function Content() {
  const [totalCount, setTotalCount] = useState(0);
  // const handleClick = () => setTotalCount((oldValue) => oldValue + 1);
  const handleClick = useCallback(() => setTotalCount((oldValue) => oldValue + 1), []);

  const shouldTexBeBlack = totalCount > 10;

  const cellStyle = useMemo(() => {
    if (shouldTexBeBlack) {
      return { color: 'black', padding: '5%', height: '10em' };
    }
    return { padding: '5%', height: '10em' };
  }, [shouldTexBeBlack]);

  console.log('UPDATE: Content');
  return (
    <div className="content" style={{ color: 'white', textAlign: 'center' }}>
      <Cell title="A" color="#F3A712" totalCount={0} onClick={handleClick} style={cellStyle} />
      <Cell title="B" color="#FF0054" totalCount={0} onClick={handleClick} style={cellStyle} />
      {
        shouldTexBeBlack && (
          <>
            <Cell title="C" color="#3772FF" totalCount={0} onClick={handleClick} style={cellStyle} />
            <Cell title="D" color="#BAA898" totalCount={0} onClick={handleClick} style={cellStyle} />
          </>
        )
      }
    </div>
  );
}

export default Content;