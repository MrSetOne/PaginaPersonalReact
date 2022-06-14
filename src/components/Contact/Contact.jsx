import { useState } from "react"
import './Contact.css'

const Contact = () => {

    const [data,setData]=useState({
        name: "",
        email: "",
        message: ""
    })

    const handleInputChange =({target})=>{
        setData({
            ...data, [target.name]:target.value
        })
    }

    const uploadForm = (e) => {
        e.preventDefault();
        if(!localStorage.forms){
            localStorage.forms = JSON.stringify([data])
        } else{
            let tmp = JSON.parse(localStorage.forms)
            tmp.push(data)
            localStorage.forms = JSON.stringify(tmp)
        }
    }

    return (
        <section className="Contact">
            <form className="Contact__form" onSubmit={uploadForm}>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" placeholder="Tu nombre" onChange={handleInputChange}/>
                <label htmlFor="email">Correo</label>
                <input type="text" name="email" id="email" placeholder="Tu email" onChange={handleInputChange} />
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message" placeholder="Tu mensaje" onChange={handleInputChange}></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contact