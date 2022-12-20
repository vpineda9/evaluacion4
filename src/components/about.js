import React from 'react'
import Valdivia from '../img/banner-valdivia.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='About'>
        <div className='aboutTop' 
        >
            <img src={Valdivia} alt=''></img>
        </div>
        <div className='aboutBottom'>
        
            <h2>Nuestra Ciudad</h2>
            <p>
            Valdivia es una ciudad y comuna chilena, capital de la provincia homónima y de la Región de Los Ríos. Tiene una población de 127 750 habitantes. La urbe se enmarca dentro de un entorno de llanos de sedimentación fluvial, rodeado de bosques higrófitos de ulmo y tineo, además de policultivos y frutales. La ciudad se ha configurado sobre la base de una multiculturarización, donde se mezclan las influencias mapuches, alemanas, españolas y de otras culturas, expresadas en sus costumbres, bailes, cocina y creación artística local.
            </p>
        </div>
        <hr />
    </div>

  )
}

export default About