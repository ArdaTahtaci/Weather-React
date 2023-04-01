import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import City from './components/City.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';



function App() {
  return (
    <div className="App">
      <Container className='pb-2'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/:city" element={<City />} />
        </Routes>

      </Container>
      <Footer />
    </div>
  );
}

export default App;
