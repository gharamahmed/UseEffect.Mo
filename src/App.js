import { Row } from 'react-bootstrap';
import './App.css';
import Cards from './cards/card';
import Usestate from './hooks/Usestate';

function App() {
  return (
    <div className="App">
      <Usestate/><br/>
      <Row xs={1} md={3} className="g-4">
  
          <Cards ><span> mohamed</span></Cards>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          
      </Row>
      
    </div>
  );
}

export default App;
