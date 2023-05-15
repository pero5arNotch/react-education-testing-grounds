import { useState, useCallback, useMemo, useEffect, useContext } from 'react';
import Cell from './Cell';
import { ThemeContext } from '../ThemeContext';
import ClassCell from './ClassCell';
import useInterval from '../hooks/useInterval';

function Content({ whiteTextCells, blackTextCells }) {
  const [totalCount, setTotalCount] = useState(0);
  const [shouldTexBeBlack, setShouldTextBeBlack] = useState(false);

  const theme = useContext(ThemeContext);

  useInterval(useCallback(() => { setShouldTextBeBlack((oldValue) => !oldValue); }, []), 3000);

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
    if (shouldTexBeBlack && !theme.isDark) {
      return { color: 'black', padding: '5%', minHeight: '10em' };
    }
    return { padding: '5%', minHeight: '10em' };
  }, [shouldTexBeBlack, theme]);

  const renderCell = ({ title, color }) => {
    return (
      <ClassCell
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