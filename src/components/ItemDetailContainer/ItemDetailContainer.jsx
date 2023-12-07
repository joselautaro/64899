import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import './ItemDetailContainer.css'
import { pedirProductos } from '../../helpers/pedirProductos';
import {ItemDetail} from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false);

    const [item, setItem] = useState(null);

    const {itemId} = useParams();

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                    setItem(res.find(prod => prod.id === Number(itemId)))
            })
            .catch((error) => {
                Swal.fire(`Tienes un error!, ${error}`);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])


    return (
        <div>
            <>
                {
                    loading
                        ? <h3>Cargando...</h3>
                        : (
                            <div className='padre'>
                               <ItemDetail {...item}/>
                            </div>
                        )
                }
            </>
        </div>
    )
}