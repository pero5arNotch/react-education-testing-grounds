import Header from './Header';
import Content from './Content';
import Form from './Form';
import { ThemeContext } from './ThemeContext';
import useInterval from './hooks/useInterval';

import { useState, useEffect, useCallback } from 'react';

function App() {
  console.log('UPDATE: App');

  const [theme, setTheme] = useState({ isDark: false })

  useInterval(useCallback(() => { setTheme((oldValue) => ({ ...oldValue, isDark: !oldValue.isDark })); }, []), 6000);

  const [whiteTextCells, setWhiteTextCells] = useState([{ title: 'A', color: '#F3A712' }, { title: 'B', color: '#FF0054' }]);
  const [blackTextCells, setBlackTextCells] = useState([{ title: 'C', color: '#3772FF' }, { title: 'D', color: '#BAA898' }, { title: 'Test', color: 'aquamarine' }]);

  const addCell = (newCell) => {
    const { title, color, textColor } = newCell;

    if (textColor === 'white') {
      setWhiteTextCells((oldValue) => [...oldValue, { title, color }]);
    } else if (textColor === 'black') {
      setBlackTextCells((oldValue) => [...oldValue, { title, color }]);
    }
  };

  return (
    <div className="app">
      <ThemeContext.Provider value={theme}>
        <div style={{ backgroundColor: '#51D6A9', margin: 10, padding: "10px" }}>
          <Header />
          <Form addCell={addCell} />
          <Content whiteTextCells={whiteTextCells} blackTextCells={blackTextCells} />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
