import "./listaOpciones.css"

const ListaOpcionesFormulario = (props) => {

    const manejarCambio = (e) => {
        props.setEquipo(e.target.value)
    }


    return <div className="lista-opciones">
        <label>Lista de Equipos</label>
        <select value={props.valor} onChange={manejarCambio} >
            <option value="" disabled defaultValue="" hidden >Seleccionar el equipo al que pertenece el colaborador</option>
            { props.equipos.map((elemento, index) => {
                return <option key={index}>{elemento}</option>
            })}
        </select>  
    </div>
}

export default ListaOpcionesFormulario