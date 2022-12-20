import React from 'react'
import Gal1 from '../img/gal1.jpg';
import Gal2 from '../img/gal2.jpg';
import Gal3 from '../img/gal3.jpg';
import Gal4 from '../img/gal4.jpg';
import Gal5 from '../img/gal5.jpg';
import Gal6 from '../img/gal6.jpg';
import '../App.css';

function galeria() {
  return (
    <div class='row'>
        <div ><h2>Lugares de Interés</h2>
        <br></br></div>
        <div class='columna' ><img class="imgfit" src={Gal1} alt=''></img>
        <div></div>
        </div> 
        <div class='columna'> <img class="imgfit" src={Gal2} alt=''></img></div>
        <div class='columna'><img class="imgfit" src={Gal3} alt=''></img></div>
        <div class='columna'><img class="imgfit" src={Gal4} alt=''></img></div>
        <div class='columna'><img class="imgfit" src={Gal5} alt=''></img></div>
        <div class='columna'><img class="imgfit" src={Gal6} alt=''></img></div>      
    <div> <hr></hr></div>
    </div>
    
  )
}

export default galeria