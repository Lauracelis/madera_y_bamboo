import React from "react";
import principal_image from '../../Utils/Images/principal_image.png';
import './Ppage_styles.css';

const Ppage = () => (
  <>
    <div>
      <img src={principal_image} className="Scroll" alt="imagen_principal" />
      <p>BIENVENIDO</p>
    </div>

    <section className="puntos_a_favor">
      <div className="punto1">
        <p>punto 1</p>
      </div>
      <div className="punto1">
        <p>punto 2</p>
      </div>
      <div className="punto1">
        <p>punto 3</p>
      </div>
      <div className="punto1">
        <p>punto 3</p>
      </div>
    </section>

    {/*Buscar hacer un grid aquí*/}
    <section className="galeria_imagenes">
      <div className="imagen1">
        <p>imagen 1</p>
      </div>
      <div className="imagen2">
        <p>image 2</p>
      </div>
      <div className="imagen3">
        <p>image 3</p>
      </div>
      <div className="imagen4">
        <p>imagen4</p>
      </div>
      <div className="imagen5">
        <p>imagen5</p>
      </div>
      <div className="imagen6">
        <p>imagen6</p>
      </div>
      <div className="imagen7">
        <p>imagen7</p>
      </div>
      <div className="imagen8">
        <p>imagen8</p>
      </div>
      <div className="imagen9">
        <p>imagen9</p>
      </div>
    </section>

    <section className="llamadaALaAcción">
      <div className="punto1">
        <p>punto 1</p>
      </div>
    </section>

  
  </>
)
  
  export default Ppage;