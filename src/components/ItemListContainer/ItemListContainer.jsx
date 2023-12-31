import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import './style.css'
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false);

    const [items, setItems] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                if(categoryId){
                    setItems(res.filter(prod => prod.category === categoryId))
                }else{
                    setItems(res)
                }
            })
            .catch((error) => {
                Swal.fire(`Tienes un error!, ${error}`);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])


    return (
        <div>
            <>
                {
                    loading
                        ? <h3>Cargando...</h3>
                        : <ItemList productos={items}/>
                }
            </>
        </div>
    )
}