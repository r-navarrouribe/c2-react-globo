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

  // Fin declaraciones
  return (
    <>
      <div className="contenedor-icono">
        <i
          onMouseOver={moverGlobo}
          className="icono-globo fab fa-fly"
          style={posicionGlobo}
        ></i>
        ;
      </div>
    </>
  );
}

export default App;
