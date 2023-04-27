import { useState, useCallback, useMemo } from 'react';
import Cell from './Cell';

function Content() {
  const [totalCount, setTotalCount] = useState(0);
  const [counterByTitle, setCounterByTitle] = useState({
    'A': 0,
    'B': 0,
    'C': 0,
    'D': 0,
  });

  const handleClick = useCallback((title) => {
    setTotalCount((oldValue) => oldValue + 1);
    setCounterByTitle((oldValue) => {
      return { ...oldValue, [title]: oldValue[title] + 1 };
    });
  }, []);

  const shouldTexBeBlack = totalCount % 2 === 1;

  const cellStyle = useMemo(() => {
    if (shouldTexBeBlack) {
      return { color: 'black', padding: '5%', height: '10em' };
    }
    return { padding: '5%', height: '10em' };
  }, [shouldTexBeBlack]);

  console.log('UPDATE: Content');
  return (
    <div className="content" style={{ color: 'white', textAlign: 'center' }}>
      {
        shouldTexBeBlack
          ? (
            <>
              <Cell key="C" title="C" color="#3772FF" counter={counterByTitle.C} totalCount={0} onClick={handleClick} style={cellStyle} />
              <Cell key="D" title="D" color="#BAA898" counter={counterByTitle.D} totalCount={0} onClick={handleClick} style={cellStyle} />
            </>
          )
          : (
            <>
              <Cell key="A" title="A" color="#F3A712" counter={counterByTitle.A} totalCount={0} onClick={handleClick} style={cellStyle} />
              <Cell key="B" title="B" color="#FF0054" counter={counterByTitle.B} totalCount={0} onClick={handleClick} style={cellStyle} />
            </>
          )
      }
    </div>
  );
}

export default Content;