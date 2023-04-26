import logo from './logo.png';

function App() {
  return (
    <div className="app">
      <div style={{ backgroundColor: '#51D6A9', margin: 10, padding: "10px" }}>

        <div className="header">
          <div>
            <img src={logo} height={50} style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, margin: 10 }} alt="logo" />
          </div>
          <div>
            <h1>Hello World!</h1>
            <span>
              Dobrodošli na današnje predavanje!
            </span>
          </div>
        </div>

        <div className="content" style={{ color: 'white', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#F3A712', padding: '5%', height: '10em' }}>
            <h2>A</h2>
          </div>
          <div style={{ backgroundColor: '#FF0054', padding: '5%', height: '10em' }}>
            <h2>B</h2>
          </div>
          <div style={{ backgroundColor: '#3772FF', padding: '5%', height: '10em' }}>
            <h2>C</h2>
          </div>
          <div style={{ backgroundColor: '#BAA898', padding: '5%', height: '10em' }}>
            <h2>D</h2>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
