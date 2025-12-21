import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import './Titulo.css'

function Titulo() {
    const el = useRef(null)

    useEffect(() => {
        if (el.current) {
            const typed = new Typed(el.current, {
                strings: ['Desarrolladores Frontend', 'Desarrolladores Web', 'Especialistas en React'],
                typeSpeed: 80,
                backSpeed: 50,
                loop: true,
                loopCount: Infinity,
                showCursor: true,
                cursorChar: '|'
            })

            return () => {
                typed.destroy()
            }
        }
    }, [])

    return (
        <header className='header' id='Inicio'>
        <h1 className='titulo' ref={el}>
        </h1>
        <p className='parrafo1'>
            Proyecto realizado con la finalidad de demostrar el uso de React con Vite
        </p>
        </header>
    )
}

export default Titulo
