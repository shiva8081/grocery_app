import React from 'react'
import { FaPlus } from 'react-icons/fa'

export const AddItem = ({newitem,setnewitem,handlesubmit}) => {
    return (
        <form className='addForm mx-4 my-4' onSubmit={handlesubmit} >
            <label htmlFor='addItem' className='mx-4'>AddItem</label>
            <input type='text' id='addItem' autoFocus required placeholder='additem' className='border-double ' value={newitem} onChange={(e)=>setnewitem(e.target.value)} ></input>
            <button type='submit' aria-label='Add Item'  className=' mx-4'><FaPlus /></button>
        </form>
    )
}
