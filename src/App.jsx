import 'normalize.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar/>
        </header>
        <Routes>
          <Route path="/" element={<Aboutme/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
