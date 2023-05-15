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

export default Form;