import Knowledgegrid from "./Knowledgegrid/Knowledgegrid"
import './Knowledge.css'

const knows = {
    frontEnd:[
        {name:"HTML",img:"https://victorroblesweb.es/wp-content/uploads/2020/03/aprender-html-en-15-minutos.jpg"},
        {name:"CSS",img:"https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png"},
        {name:"Sass", img:"https://www.espai.es/blog/wp-content/uploads/2018/04/descubriendo-sass.jpg"},
        {name:"Bootstrap",img:"https://www.drupal.org/files/project-images/bootstrap5.jpeg"},
        {name:"Tailwind",img:"https://www.drupal.org/files/styles/grid-3-2x/public/project-images/screenshot_361.png?itok=w4CzcWyb"},
        {name:"JavaScript", img:"http://javadesde0.com/wp-content/uploads/480px-Unofficial_JavaScript_logo_2.svg_.png"},
        {name:"React",img:"https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/34/posts/29003/preview_image/react.js.png"}
    ],
    backEnd:[
        {name:"NodeJs",img:"https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png"},
        {name:"NPM",img:"data:image/png;base64,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"},
        {name:"Express",img:"https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"},
        {name:"Sequelize", img:"https://pbs.twimg.com/profile_images/1509802359383367691/R0psIpR4_400x400.jpg"},
        {name:"Mongoose",img:"https://pbs.twimg.com/profile_images/946432748276740096/0TXzZU7W_400x400.jpg"},
        {name:"Jest", img:"https://jestjs.io/es-ES/img/opengraph.png"},
        {name:"Postman",img:"https://i1.wp.com/aquiensistemas.com/wp-content/uploads/2021/01/pp.png?fit=1200%2C600&ssl=1"}
    ]
}

function Knowledge() {
  return (
    <div className="Knowledge__container">
        <h2 className="Knowledge__title">Conocimientos</h2>
        <section>
            <h3 className="Knowledge__section">- FrontEnd -</h3>
            <Knowledgegrid arr={knows.frontEnd}/>
        </section>
        <section>
            <h3 className="Knowledge__section">- BackEnd -</h3>
            <Knowledgegrid arr={knows.backEnd}/>
        </section>
    </div>
  )
}

export default Knowledge

const mike ={
    alias: "MrSetOne",
    age: 27,
    basedOn: "Valencia, Spain",
    hobbies: ["hardware","cinema","photography","videogames","eSports"],
    knowledges:{
        frontEnd:["HTML","CSS","Sass","Bootstrap","JavaScript Vanilla","React"],
        backEnd:["NodeJs","Express","Sequelize","Mongoose","Jest"],
        others:["VSCode","Git","Jira"]
    },
    stack: "MERN",
}