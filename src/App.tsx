import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import AdviceGeneratorComponent from './components/AdviceGeneratorComponent';


function App() {
  
  return (
   <Container>
      <Row>
          <Col>
            <AdviceGeneratorComponent/>
          </Col>
      </Row>
   </Container>
  );
}

export default App;
