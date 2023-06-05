import "./equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    const { colaboradores, eliminarColaborador, identificador } = props

    return <>{ colaboradores.length > 0 &&
        <section className="equipo" style={ { backgroundColor: props.datos.colorPrimario } }>
            <h3 style={ { borderBlockColor: props.datos.colorSecundario } } >{props.datos.Titulo}</h3>
            <div className="colaboradores">
                {colaboradores.map( (colaborador, index) => <Colaborador 
                datos={colaborador} key={index} colorSecundario={ props.datos.colorSecundario } 
                eliminarColaborador={eliminarColaborador} 
                identificador={identificador} /> )}
            </div>
        </section>
    }</>
}

export default Equipo