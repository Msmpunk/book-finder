import React, { Component } from 'react'

import { Navbar } from './Navbar/Navbar'
import UiPrivateRouter from './UiPrivateRouter'
import img from '../../assets/img/pub2.png'
/* Styles */
import './UiPrivate.sass';

export default class UiPrivate extends Component {
  render() {
    return (
      <div className="UiPrivate">
        <div className="nav-bar">
          <Navbar/>
        </div>
        <div className='content__main'>
          <div className='content__router'>
            <UiPrivateRouter/>
            <div className='wrapper'>
              <img className='pub__large' src={img} alt='pug2'/>
            </div>
          </div>
        </div>
        <footer className='footer'>
          <div className='content__footer'>
            <p>¿Tienes preguntas? 01•800•0000•0000 - Información corporativa - Legales - Términos y condiciones - Aviso de privacidad - Contacto</p>
          </div>
        </footer>
      </div>
    );    
  }
}