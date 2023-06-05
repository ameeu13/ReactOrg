import { useState } from "react"
import "./formulario.css"
import TextoCamposFormulario from "../TextosFormulario/TextosFormulario"
import ListaOpcionesFormulario from "../listaOpciones/listaOpciones"
import Boton from "../botonFormulario"
import { v4 as uuidAME13 } from "uuid"


const Formulario = (props) => {

    const[nombre,actualizarNombre] = useState("")
    const[puesto,actualizarPuesto] = useState("")
    const[foto,actualizarFotografia] = useState("")
    const[equipo,actualizarEquipo] = useState("")

    const { registrarColaborador } = props

    const controlarEnvioDatosBoton = (evento) =>{
        evento.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }//se genera un objeto con los datos
        registrarColaborador(datosAEnviar) //Acá se podría utilizar cualquier otra función para enviar esos datos al back-end
    }

    return <section className="formulario">
        <form onSubmit={controlarEnvioDatosBoton}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <TextoCamposFormulario titulo="Nombre" placeholder= "Ingresar el nombre del colaborador" required valor={nombre} setValor={actualizarNombre} />
            <TextoCamposFormulario titulo="Puesto" placeholder= "Ingresar el puesto del colaborador" required valor={puesto} setValor={actualizarPuesto} />
            <TextoCamposFormulario titulo="Fotografía" placeholder= "Ingresar el enlace de la fotografía" valor={foto} setValor={actualizarFotografia} />
            <ListaOpcionesFormulario required valor={equipo} setEquipo={actualizarEquipo} equipos={props.equipos}/>
            <Boton texto="Crear Colaborador" />
        </form>
    </section>
}

export default Formulario