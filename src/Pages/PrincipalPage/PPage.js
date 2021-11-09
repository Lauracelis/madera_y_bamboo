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

    <section className="puntos_a_favor_2.0">
      <div className="punto1">
        <p>punto 1</p>
      </div>
      <div className="punto1">
        <p>punto 2</p>
      </div>
      <div className="punto1">
        <p>punto 3</p>
      </div>
    </section>

    <section>
      <div className="contacto">
        <div className="contactinfo">
          <h2>Información de contacto</h2>
          <ul className="info">
            <li>
              <span>{/*<img src={} className="icono" alt="Ubicación">/*/}</span>
              <span>Venecia
                Bogotá,Colombia
                calle 42b #72h sur 15</span>
            </li>
            <li>
              <span>{/*<img src={} className="icono" alt="Correo">/*/}</span>
              <span>maderaybamboo@gmail.com</span>
            </li>
            <li>
              <span>{/*<img src={} className="icono" alt="Celular">/*/}</span>
              <span>3058696361</span>
            </li>
          </ul>
          <ul className="sci">
            <li>{/*<a href="#"></a><img src="instagram"/>*/}</li>
            <li>{/*<a href="#"></a><img src="facebook"/>*/}</li>
          </ul>
        </div>
      </div>
      <div className="contactForm">
        <h2>Envianos un mensaje</h2>
        <div className="formBox">
          <div className="inputBox">
            <input type="text" name="" required />
            <span>Nombres</span>
          </div>
          <div className="inputBox">
            <input type="text" name="" required />
            <span>Apellidos</span>
          </div>
          <div className="inputBox">
            <input type="text" name="" required />
            <span>correo</span>
          </div>
          <div className="inputBox">
            <input type="text" name="" required />
            <span>celular</span>
          </div>
          <div className="inputBoxx">
            <textarea name="" required></textarea>
            <span>Escribe aquí tu mensaje</span>
          </div>
          <div className="inputBoxx">
            <input type="submit" value="send" />
          </div>
        </div>
      </div>

    </section>


  </>
)
  
  export default Ppage;