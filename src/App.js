import './App.css';
import { TestButton } from './Components/Button'
//import { Button } from 'react-bootstrap';
import "./Components/Button/style.css";
import { BodyShorthandExample, BasicExample } from './Components/Card'
import Container from 'react-bootstrap/Container'


function App() {
  return (
    
    <div className="App">
      <Container>
      My react demo
      <TestButton buttonName={"Login"}/>
      <TestButton buttonName={"Sign Up"}/>
      <BodyShorthandExample text={"Welcome to my website"}/>
      <BasicExample/>
      </Container>
    </div>
  );
}

export default App;
