import { useState, useCallback, useMemo, useEffect } from 'react';
import Cell from './Cell';

function Content({ whiteTextCells, blackTextCells }) {
  const [totalCount, setTotalCount] = useState(0);
  const [shouldTexBeBlack, setShouldTextBeBlack] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => { setShouldTextBeBlack((oldValue) => !oldValue); }, 30000);

    return () => {
      clearInterval(intervalId);
      console.info('Interval cleared');
    };
  }, []);

  const [counterByTitle, setCounterByTitle] = useState({});

  useEffect(() => {
    setCounterByTitle((oldValue) => {
      const newValue = { ...oldValue };
      for (const { title } of [...whiteTextCells, ...blackTextCells]) {
        if (!newValue[title]) {
          newValue[title] = 0;
        }
      }
      return newValue;
    });
  }, [whiteTextCells, blackTextCells]);

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
      return { color: 'black', padding: '5%', minHeight: '10em' };
    }
    return { padding: '5%', minHeight: '10em' };
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
              {blackTextCells.map(renderCell)}
            </>
          )
          : (
            <>
              {whiteTextCells.map((cell) => renderCell(cell))}
            </>
          )
      }
    </div>
  );
}

export default Content;