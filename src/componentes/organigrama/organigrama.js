import { useState } from "react"
import "./organigrama.css"

const MiOrg = (props) => {

    return <section className="OrgSection">
        <h3 className="titulo">- Mi Organización - </h3>
        <img src="/img/add.png" alt="adicionar" className="imagen" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg