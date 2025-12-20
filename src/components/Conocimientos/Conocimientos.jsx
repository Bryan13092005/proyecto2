import React from 'react'
import './Conocimientos.css'
import ImagenesEfectos from '../ImagenesEfectos/ImagenesEfectos';
function Conocimientos() {
    return (
        <section>
            <section id='LenguajesProgramacion'>
            <h2>Lenguajes de programacion frontend y backend</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Java</li>
                <li>Python</li>
                <li>C++</li>
            </ul>
            </section>
            <section id='Imagenes'>
                <ImagenesEfectos/>
            </section>
        </section>
    )
}
export default Conocimientos
