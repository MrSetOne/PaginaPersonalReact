import 'normalize.css'
import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header>
          <Navbar/>
          <Aboutme/>
      </header>
    </div>
  );
}

export default App;
