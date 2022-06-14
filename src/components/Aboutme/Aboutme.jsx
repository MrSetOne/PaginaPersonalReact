import Mainabout from "./Mainabout/Mainabout"
import './Aboutme.css'
import Knowledge from "./Knowledge/Knowledge"

function Aboutme() {
  return (
    <div className="aboutme__container">
        <Mainabout/>
        <Knowledge/>       
    </div>
  )
}

export default Aboutme