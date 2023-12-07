import React from 'react'
import {Counter} from '../Counter/Counter'
import {useNavigate} from 'react-router-dom'
import './ItemDetail.css'

export const ItemDetail = ({name, description, price, photo}) => {

    const navigate = useNavigate()

    const back = () =>{
        navigate(-1)
    }


    return (
        <div className="card m-2">
            <img src={photo} className="card-img-top" alt={photo} />
            <div className="card-body">
                <h5 className="card-title">{description}</h5>
                <p className="card-text">{name}</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit molestiae deleniti tenetur sed alias vel, obcaecati quis dicta fuga ut. Ipsam qui adipisci mollitia earum eius numquam a! Maxime, harum.</p>
                <p className="bg-info">${price}</p>
            </div>
            <Counter />
            <button className='btn btn-success'>Agregar al carrito</button>
            <button className='btn btn-danger' onClick={back}>Volver hacia atrás</button>
            <button className='btn btn-info' to="/cart">Ir al carrito</button>
        </div>
    )
}
