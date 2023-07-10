import Container from 'react-bootstrap/Container';
import { useRoutes } from 'react-router-dom';

import Navigation from './components/Navigation';
import routes from './routes';

function App() {
  const content = useRoutes(routes);

  return (
    <>
      <Navigation />
      <Container>
        {content}
      </Container>
    </>
  );
}

export default App;
