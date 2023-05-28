import { useState } from 'react'
import HandlerError from './components/errorHandler.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import BoardJuego from './components/BoardJuego.jsx'
import Lobby from './components/Lobby.jsx'



function App() {

  const [jugadorUno, setJugadorUno] = useState("");

    const handleChange1 = (e) => {
        const { jugadorUno, value } = e.target;
        setJugadorUno({ value });
    };

  const router = createBrowserRouter([
    {
      path: "/boardjuego",
      element: <BoardJuego jugadorUno={jugadorUno} handleChange1={handleChange1}/>,
      errorElement: <HandlerError/>
    }, {
      path: "/",
      element: <Lobby jugadorUno={jugadorUno} handleChange1={handleChange1}/>,
      errorElement: <HandlerError/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
