import React from 'react'
import { ItemList } from './ItemList';


const Content = ({items,deletebtn,onCheckbox}) => {

return (
    <div className='flex justify-center items-center flex-col'>
    {items.length ?(
   <ItemList items={items} deletebtn={deletebtn} onCheckbox={onCheckbox}/>
    ):('list is empty')}

    </div>

)
}

export default Content;