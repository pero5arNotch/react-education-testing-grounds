import Header from './Header';
import Content from './Content';

function App() {
  console.log('UPDATE: App');

  const whiteTextCells = [{ title: 'A', color: '#F3A712' }, { title: 'B', color: '#FF0054' }];
  const blackTextCells = [{ title: 'C', color: '#3772FF' }, { title: 'D', color: '#BAA898' }];

  return (
    <div className="app">
      <div style={{ backgroundColor: '#51D6A9', margin: 10, padding: "10px" }}>
        <Header />
        <Content whiteTextCells={whiteTextCells} blackTextCells={blackTextCells} />
      </div>
    </div>
  );
}

export default App;
