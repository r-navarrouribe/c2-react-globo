function App() {
  const randomHeight = Math.floor(Math.random() * window.innerHeight);
  const randomWidth = Math.floor(Math.random() * window.innerWidth);
  return (
    <>
      <div className="contenedor-icono">
        <i
          className="icono-globo fab fa-fly"
          style={{ top: randomHeight, left: randomWidth }}
        ></i>
      </div>
    </>
  );
}

export default App;
