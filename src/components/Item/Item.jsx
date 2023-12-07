import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({id, name, description, price, photo, category}) => {
    return (
        <div className="card m-2">
            <img src={photo} className="card-img-top" alt={photo} />
            <div className="card-body">
                <h5 className="card-title">Descripcion: {description}</h5>
                <h6 className="card-title">Categoría: {category}</h6>
                <p className="card-text">Nombre: {name}</p>
                <p className="bg-info">${price}</p>
            </div>
            <div>
                <Link className='btn btn-info' to={`/detail/${id}`}>Ver más detalles</Link>
            </div>
        </div>
    )
}
