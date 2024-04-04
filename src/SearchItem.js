import React from 'react'

export const SearchItem = ({search,setsearch}) => {
  return (
    <form className='searchitem  m-3 ' onSubmit={(e)=>e.preventDefault()} >
        <input className='border-2 border-black border-double w-[300px]' type='text' id='search' role='searchbox' placeholder='search box' value={search} onChange={(e)=>setsearch(e.target.value)} />
    </form>
  )
}
