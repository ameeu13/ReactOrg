import { useState } from 'react';
import './App.css';
import encabezado from './componentes/encabezado/encabezado';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/organigrama/organigrama';
import Equipo from './componentes/equipo';
import Colaborador from './componentes/Colaborador';
import Footer from './componentes/footer';
import { v4 as uuidAME13 } from "uuid"

function App() {
  const [mostrarFromulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([])

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFromulario)
  }

  const registrarColaborador = (Colaborador) => {
    console.log("Nuevo colaborador", Colaborador)
    actualizarColaboradores([...colaboradores, Colaborador])
  }

  const eliminarColaborador = (identificador) => {
    console.log("Eliminar este colaborador", identificador)
    const nuevosColaboradores = colaboradores.filter((colaborador => colaborador.identificador !== identificador))
    actualizarColaboradores(nuevosColaboradores)
  }
  const identificador = () => {
    return uuidAME13()
  }

  const equipos = [
    {
      id: uuidAME13(),
      Titulo: "Team de Programación",
      colorPrimario: "#D9F7E9",
      colorSecundario: "#57C278",
    },
    {
      id: uuidAME13(),
      Titulo: "Team de Front End",
      colorPrimario: "#E8F8FF",
      colorSecundario: "#82CFFA",
    },
    {
      id: uuidAME13(),
      Titulo: "Team de Data Science",
      colorPrimario: "#F0F8E2",
      colorSecundario: "#A6D157",
    },
    {
      id: uuidAME13(),
      Titulo: "Team de DevOps",
      colorPrimario: "#FDE7E8",
      colorSecundario: "#E06B69",
    },
    {
      id: uuidAME13(),
      Titulo: "Team de UX y Diseño",
      colorPrimario: "#FAE9F5",
      colorSecundario: "#DB6EBF",
    },
    {
      id: uuidAME13(),
      Titulo: "Team de Mobile",
      colorPrimario: "#FFF5D9",
      colorSecundario: "#FFBA05",
    },
    {
      id: uuidAME13(),
      Titulo: "Team de Innovación y Gestión",
      colorPrimario:"#FFEEDF",
      colorSecundario: "#FF8A29",
    }
  ]

  return (
    <div>
      { encabezado() }
      { mostrarFromulario ? <Formulario equipos={equipos.map((equipo) => equipo.Titulo)} 
      registrarColaborador={registrarColaborador} /> : <></> }
      
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map( (equipo) => {
          return <Equipo datos={equipo} key={equipo.Titulo} 
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.Titulo ) } 
          eliminarColaborador={eliminarColaborador} identificador={identificador} />
        } )
      }
      <Footer />

    </div>
  );
}

export default App;
