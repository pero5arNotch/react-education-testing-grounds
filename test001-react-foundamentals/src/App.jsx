import logo from './logo.png';

function Header() {
  return (
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
  );
}

function Cell(props) {
  const { title, color } = props;

  return (
    <div style={{ backgroundColor: color, padding: '5%', height: '10em' }}>
      <h2>{title}</h2>
    </div>
  )
}

function Content() {
  return (
    <div className="content" style={{ color: 'white', textAlign: 'center' }}>
      <Cell title="A" color="#F3A712" />
      <Cell title="B" color="#FF0054" />
      <Cell title="C" color="#3772FF" />
      <Cell title="D" color="#BAA898" />
    </div>
  );
}

function App() {
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
