import { useState, useCallback, useMemo, useEffect } from 'react';
import Cell from './Cell';

function Content({ whiteTextCells, blackTextCells }) {
  const [totalCount, setTotalCount] = useState(0);
  const [shouldTexBeBlack, setShouldTextBeBlack] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => { setShouldTextBeBlack((oldValue) => !oldValue); }, 3000);

    return () => {
      clearInterval(intervalId);
      console.info('Interval cleared');
    };
  }, []);

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

  const handleChange = useCallback((title, value) => {
    setCounterByTitle((oldValue) => {
      return { ...oldValue, [title]: value };
    });
  }, []);

  const cellStyle = useMemo(() => {
    if (shouldTexBeBlack) {
      return { color: 'black', padding: '5%', height: '10em' };
    }
    return { padding: '5%', height: '10em' };
  }, [shouldTexBeBlack]);

  const renderCell = ({ title, color }) => {
    return (
      <Cell
        key={title}
        title={title}
        color={color}
        counter={counterByTitle[title]}
        totalCount={0}
        onChange={handleChange}
        style={cellStyle}
      />
    );
  };

  console.log('UPDATE: Content');
  return (
    <div className="content" style={{ color: 'white', textAlign: 'center' }}>
      {
        shouldTexBeBlack
          ? (
            <>
              {renderCell({ title: 'C', color: '#3772FF' })}
              {renderCell({ title: 'D', color: '#BAA898' })}
            </>
          )
          : (
            <>
              {renderCell({ title: 'A', color: '#F3A712' })}
              {renderCell({ title: 'B', color: '#FF0054' })}
            </>
          )
      }
    </div>
  );
}

export default Content;