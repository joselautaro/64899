import React from 'react'
import {Item} from '../Item/Item'

export const ItemList = ({productos=[]}) => {
  return (
    <div className='container'>
        <h3>Productos</h3>
        <div className='padre'>
            {productos.map((item) => <Item {...item} key={item.id}/>)}
        </div>
    </div>
  )
}
