import Container from 'react-bootstrap/Container';

import ForecastChart from './components/ForecastChart';
import Navigation from './components/Navigation';

import testData from './testData.json';

function App() {

  return (
    <>
      <Navigation />
      <Container>
        <ForecastChart data={testData} tempUnit="C" />
      </Container>
    </>
  );
}

export default App;
