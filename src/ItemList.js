import React from 'react'

import { LineItem } from './LineItem';



export const ItemList = ({items,deletebtn,onCheckbox}) => {
  return (
    <ul>
        {items.map((item)=>(
            <LineItem 
            item={item}
            onCheckbox={onCheckbox}
            deletebtn={deletebtn}   
            key={item.id} 
            />
        ))}
    </ul>
  )
}
