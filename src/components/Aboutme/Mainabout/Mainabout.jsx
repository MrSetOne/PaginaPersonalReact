import myPhoto from '../../../assets/me.jpg'
import './Mainabout.css'

function Mainabout() {
  return (
    <div className='mainabout'>
        <img src={myPhoto} alt="Michael Lara" className='mainabout__porfile'/>
        <div className='mainabout__text'>
            <h3 className='mainabout__title'>Sobre mi</h3>
            <p className='mainabout__p'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores labore non suscipit amet at, totam odio asperiores eum ducimus velit quasi necessitatibus et similique molestiae nostrum sed consequuntur magnam? Illum?
            Quibusdam possimus voluptatum officiis tempora sit molestiae voluptatibus, vitae expedita itaque eligendi obcaecati deleniti, eius et tenetur perspiciatis, odio dolore ullam ipsa dignissimos nihil unde inventore a dolorum! Possimus, consequuntur.
            </p>
        </div>
    </div>
    )
}

export default Mainabout