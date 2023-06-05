import "./Colaborador.css"
import { TiUserDeleteOutline } from "react-icons/ti"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo} = props.datos
    const { colorSecundario, eliminarColaborador, identificador  } = props

    return <div className="colaborador" identificador={identificador()}>
        <TiUserDeleteOutline onClick={() => eliminarColaborador(identificador)} className="eliminar" />
        <div className="encabezado" style={{backgroundColor: colorSecundario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="informacion">
            <h4>{nombre} </h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador