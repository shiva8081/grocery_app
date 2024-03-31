import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';

export const LineItem = ({item,onCheckbox,deletebtn}) => {
  return (
    <li   >
                <input type='checkbox' 
                checked={item.checked} 
                onChange={()=>onCheckbox(item.id)}/>

                <label onDoubleClick={()=>onCheckbox(item.id)}>{item.item}</label>

                <FaTrashAlt className=''
                role='button'
                tabIndex='0'
                onClick={()=>deletebtn(item.id)}
                aria-label={`delete: ${item.item}`}
                />

                
            </li>
  )
}
