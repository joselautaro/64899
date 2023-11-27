import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const PokeApi = () => {

    const [id, setId] = useState(1)

    const [pokemon, setPokemon] = useState("")

    // const [busqueda, setBusqueda] = useState("")



    useEffect(() => {
        setPokemon("")
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => {
                const data = resp.data;
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    imagen: data.sprites.front_default
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }, [id])



    const handleAnterior = () => {
        id > 1 && setId(id -1)
    }

    const handleSiguiente = () => {
        setId(id + 1)
    }

    return (
        <div className='container'>
            <div className="card">
                <h1>Mis pokemones</h1>
                {
                    !pokemon ? (
                        <h3>Cargando...</h3>
                    ) : (
                        <>
                            <img src={pokemon.imagen} className="card-img-top" alt={pokemon.imagen} />
                            <div className="card-body">
                                <h3 className="card-title">{pokemon.nombre}</h3>
                                <p className="card-text">N°: {pokemon.numero}</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='container'>
                <button className='btn btn-info m-4' onClick={handleAnterior}>Anterior</button>
                <button className='btn btn-success m-4' onClick={handleSiguiente}>Siguiente</button>
            </div>
        </div>
    )
}
