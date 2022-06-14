import Mainabout from "./Mainabout/Mainabout"
import './Aboutme.css'
import Knowledge from "./Knowledge/Knowledge"

function Aboutme() {
  return (
    <section className="aboutme__container">
        <Mainabout/>
        <Knowledge/>       
    </section>
  )
}

export default Aboutme