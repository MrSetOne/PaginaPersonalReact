import 'normalize.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <header>
          <Navbar/>
      </header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Aboutme/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
