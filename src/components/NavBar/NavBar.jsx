import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'



export const NavBar = () => {
    return (
        <>
            <nav>
                <Link className='link' to="/">Inicio</Link>
                <Link className='link' to="/poke">Poke</Link>
                <Link className='link' to="/productos/ropa">Ropa</Link>
                <Link className='link' to="/productos/tecnologia">Tecnología</Link>
                <Link className='link' to="/productos/bazar">Bazar</Link>
                <Link className='link' to="/productos/electronica">Electrónica</Link>
                <Link className='link' to="/cart"><CartWidget/></Link>
            </nav>
        </>
    )
}
