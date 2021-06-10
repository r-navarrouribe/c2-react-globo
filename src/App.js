import { useState } from "react";

function App() {
  // Inicio declaraciones
  const randomHeight = Math.floor(Math.random() * window.innerHeight);
  const randomWidth = Math.floor(Math.random() * window.innerWidth);
  const [posicionGlobo, setPosicionGlobo] = useState({
    top: randomHeight,
    left: randomWidth,
  });

  const moverGlobo = () => {
    setTimeout(() => {
      const nuevaPosicion = { top: randomHeight, left: randomWidth };
      setPosicionGlobo(nuevaPosicion);
    }, 200);
  };
  let [contadorClicks, setContadorClicks] = useState(0);
  const sumadorContador = () => {
    setContadorClicks(contadorClicks++);
  };
  // Fin declaraciones
  return (
    <>
      <div>
        <span className="texto-contador">
          Número de clicks: {contadorClicks}
        </span>
      </div>
      <div className="contenedor-icono">
        <i
          onMouseOver={moverGlobo}
          onClick={sumadorContador}
          className="icono-globo fab fa-fly"
          style={posicionGlobo}
        ></i>
      </div>
    </>
  );
}

export default App;
