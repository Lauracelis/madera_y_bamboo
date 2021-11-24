import React from 'react';


export default function Contact() {
    return(
        <>
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
    </>
    )
}