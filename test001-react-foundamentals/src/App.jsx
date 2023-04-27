import Header from './Header';
import Content from './Content';

function App() {
  console.log('UPDATE: App');
  return (
    <div className="app">
      <div style={{ backgroundColor: '#51D6A9', margin: 10, padding: "10px" }}>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
