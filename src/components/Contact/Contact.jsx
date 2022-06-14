import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import isEmail from "validator/lib/isEmail"
import './Contact.css'

const Contact = () => {
    let navigate = useNavigate()

    const [alerter, setAlerter] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setAlerter("")
        }, 5000);
    },[alerter])

    const [data,setData]=useState({
        name: "",
        email: "",
        message: ""
    })

    const handleInputChange =({target})=>{
        setData({
            ...data, [target.name]:target.value
        })
        if(data.email && data.message && data.name){
            setBtnDisabled(false)
        } else{
            setBtnDisabled(true)
        }
    }

    const uploadForm = (e) => {
        e.preventDefault();
        if(!data.email || !data.message || !data.name){
            return setAlerter("Rellena todos los campos")
        }
        if(data.name.length < 3){
            return setAlerter("El nombre es demasiado corto")
        }
        if(!isEmail(data.email)){
            return setAlerter("Email con formato incorrecto");
        }
        if(data.message.length < 10){
            return setAlerter("El mensaje es demasiado corto")
        }
        setAlerter("Mensaje mandado con exito")
        setTimeout(() => {
            navigate("/")
        }, 5000);
        if(!localStorage.forms){
            localStorage.forms = JSON.stringify([data])
        } else{
            let tmp = JSON.parse(localStorage.forms)
            tmp.push(data)
            localStorage.forms = JSON.stringify(tmp)
        }
    }

    return (
        <>
            <section className="Contact">
                <form className="Contact__form" onSubmit={uploadForm}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" placeholder="Tu nombre" onChange={handleInputChange}/>
                    <label htmlFor="email">Correo</label>
                    <input type="text" name="email" id="email" placeholder="Tu email" onChange={handleInputChange} />
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message" placeholder="Tu mensaje" onChange={handleInputChange}></textarea>
                    <button type="submit" disabled={btnDisabled} >Enviar</button>
                </form>
            </section>
            {(alerter === "")?null:<p className="alerter">{alerter}</p>}
        </>
    )
}

export default Contact