import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="mian-content">


        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha Inicio</th>
                <th scope="col">Fecha Caducada</th>
                <th scope="col">Teléfono</th>
                <th scope="col-2" colSpan="2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Actualizar</td>
                <td>Eliminar</td>
              </tr>
            </tbody>
          </table>
        </div>

      </section>

    </>
  )
}

export default App
