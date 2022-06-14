import 'normalize.css'
import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header>
          <Navbar/>
          <Contact/>
          <Aboutme/>
      </header>
    </div>
  );
}

export default App;
