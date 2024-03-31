import React from 'react'
import { ItemList } from './ItemList';


const Content = ({items,deletebtn,onCheckbox,loading}) => {

return (
    <div className='flex justify-center items-center flex-col border-double border-2 border-blue-400'>
        {loading && <p>loading item...</p>}
 {  !loading&&(items.length ?(
   <ItemList items={items} deletebtn={deletebtn} onCheckbox={onCheckbox}/>
    ):('list is empty'))}

    </div>

)
}

export default Content;