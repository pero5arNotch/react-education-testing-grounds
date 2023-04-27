import Header from './Header';
import Content from './Content';
import { useCallback, useState } from 'react';

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

function App() {
  console.log('UPDATE: App');

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
      <div style={{ backgroundColor: '#51D6A9', margin: 10, padding: "10px" }}>
        <Header />
        <Form addCell={addCell} />
        <Content whiteTextCells={whiteTextCells} blackTextCells={blackTextCells} />
      </div>
    </div>
  );
}

export default App;
