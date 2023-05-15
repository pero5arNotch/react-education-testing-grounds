import Header from './Header';
import Content from './Content';
import { useCallback, useState, createContext, useEffect } from 'react';

function Form({ addCell }) {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [textColor, setTextColor] = useState('black');

  const handleTitleChange = useCallback((e) => setTitle(e.target.value), []);
  const handleColorChange = useCallback((e) => setColor(e.target.value), []);
  const handleTextColorChange = useCallback((e) => setTextColor(e.target.value), []);

  const handleSubmit = (e) => {
    e.preventDefault();

    addCell({
      title,
      color,
      textColor,
    });

    setTitle('');
    setColor('');
    setTextColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title: <input name="title" value={title} onChange={handleTitleChange} /></label>
      <label>Color: <input name="color" value={color} onChange={handleColorChange} /></label>
      <label>
        Text Color:
        <label><input name="textColor" type="radio" value="white" checked={textColor === 'white'} onChange={handleTextColorChange} />White</label>
        <label><input name="textColor" type="radio" value="black" checked={textColor === 'black'} onChange={handleTextColorChange} />Black</label>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export const ThemeContext = createContext(null)

function App() {
  console.log('UPDATE: App');

  const [theme, setTheme] = useState({ isDark: false })

  useEffect(() => {
    const intervalId = setInterval(() => { setTheme((oldValue) => ({ ...oldValue, isDark: !oldValue.isDark })); }, 6000);

    return () => {
      clearInterval(intervalId);
      console.info('Interval cleared');
    };
  }, []);

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
