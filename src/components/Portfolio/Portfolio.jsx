import blogDeCafe from '../../assets/screenshots/BlogDeCafe.png';
import paginaPersonal from '../../assets/screenshots/PaginaPersonal.jpg';
import clonTwitter from '../../assets/screenshots/ClonTwitter.png';
import clonInstagram from '../../assets/screenshots/ClonInstagram.png'
import gameQuiz from '../../assets/screenshots/GameQuiz.png'

import './Portfolio.css'


const Portfolio = () => {
    const portfolio =[
        {
            github:"https://github.com/MrSetOne/04.BlogDeCafe",
            title:"Blog de Café",
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum lobortis faucibus. Donec mollis in augue id ultrices.",
            technologies: ["HTML","CSS"],
            img:blogDeCafe
        },
        {
            github:"https://github.com/MrSetOne/PaginaPersonal",
            title:"Pagina personal",
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum lobortis faucibus. Donec mollis in augue id ultrices.",
            technologies: ["HTML","CSS","JavaScript"],
            img:paginaPersonal
        },
        {
            github:"https://github.com/MrSetOne/TB_10_FakeTwitter",
            title: "Clon de Twitter",
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum lobortis faucibus. Donec mollis in augue id ultrices.",
            technologies: ["HTML","CSS","JavaScript"],
            img: clonTwitter
        },
        {
            github:"https://github.com/MrSetOne/TB_25_FakeInstagram",
            title:"Clon de Instagram",
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum lobortis faucibus. Donec mollis in augue id ultrices.",
            technologies: ["HTML","CSS","React"],
            img:clonInstagram
        },
        // {
        //     github:"https://github.com/MrSetOne/TaskR",
        //     title: "Taskr",
        //     desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum lobortis faucibus. Donec mollis in augue id ultrices.",
        //     technologies: ["NodeJs"]
        // },
        {
            github:"https://github.com/MrSetOne/Quiz",
            title: "GameQuiz!",
            desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum lobortis faucibus. Donec mollis in augue id ultrices.",
            technologies: ["HTML","CSS","JavaScript"],
            img: gameQuiz
        }
        // {
        //     github:"https://github.com/MrSetOne/Frikishop",
        //     title: "Frikishop",
        //     desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum lobortis faucibus. Donec mollis in augue id ultrices.",
        //     technologies: ["NodeJs","MySQL"]
        // },
        // {
        //     github:"https://github.com/MrSetOne/SocialNetwork_MongoDB",
        //     title: "Red social",
        //     desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum lobortis faucibus. Donec mollis in augue id ultrices.",
        //     technologies: ["NodeJs","MongoDB"]
        // }
    ]
  
    const print = portfolio.map((element, i) =>{
        return(
            <div key={i} className="Portfolio__item">
                <img src={element.img} alt={element.title} />
                <div className='Portfolio__info'>
                    <h2>{element.title}</h2>
                    <h3>Descripcion</h3>
                    <p>{element.desciption}</p>
                    <h3>Teconologias utilizadas</h3>
                    <ul>
                        {element.technologies.map((tech,i)=> <li key={i}>{tech}</li> )}
                    </ul>
                    <a href={element.github} rel="noreferrer" target="_blank">Github</a>
                </div>
            </div>
        )
    })
  
  
    return (
        <section className="Portfolio">
            {print}
        </section>
    )
}

export default Portfolio