import Header from './Header';
import Content from './Content';
import { useState } from 'react';

function Form() {

  const handleSubmit = (e, ...rest) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Title: <input name="title" /></label>
      <label>Color: <input name="color" /></label>
      <label>
        Text Color:
        <label><input name="textColor" type="radio" value="white" />White</label>
        <label><input name="textColor" type="radio" value="black" />Black</label>
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
        <Form />
        <Content whiteTextCells={whiteTextCells} blackTextCells={blackTextCells} />
      </div>
    </div>
  );
}

export default App;
