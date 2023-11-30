import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'
import { Counter } from '../Counter/Counter';
import { pedirProductos } from '../../helpers/pedirProductos';


export const ProductList = () => {

    const [loading, setLoading] = useState(false);

    const [items, setItems] = useState([]);

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                setItems(res)
            })
            .catch((error) => {
                Swal.fire(`Tienes un error!, ${error}`);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return (
        <div>
            <>
                {
                    loading
                        ? <h3>Cargando...</h3>
                        : (
                            <div className='padre'>
                                {items.map((item) => (
                                    <div className="card m-2" key={item.id}>
                                        <img src={item.photo} className="card-img-top" alt={item.photo} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.description}</h5>
                                            <p className="card-text">{item.name}</p>
                                            <p className="bg-info">${item.price}</p>
                                        </div>
                                        <Counter/>
                                    </div>
                                ))}
                            </div>
                        )
                }
            </>
        </div>
    )
}
