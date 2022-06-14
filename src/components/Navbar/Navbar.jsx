import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar__container">
        <h2 className="navbar__title">&lt;MichaelLara/&gt;</h2>
        <div className='navbar__nav'>
          <Link to="/">AboutMe</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolio">Porfolio</Link>
        </div>
    </nav>
  )
}

export default Navbar