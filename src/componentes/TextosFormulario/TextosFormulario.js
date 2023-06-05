import { useState } from "react"
import "./TextosFormulario.css"

const TextoCamposFormulario = (props) => {

    const placeholderModificador = `${props.placeholder}...`

    const manejarCambio = (e) =>{
        props.setValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{ props.titulo }</label>
        <input placeholder={ placeholderModificador} required={props.required} value={props.valor} onChange={manejarCambio}/>
    </div>
}

export default TextoCamposFormulario