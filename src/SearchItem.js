import React from 'react'

export const SearchItem = ({search,setsearch}) => {
  return (
    <form className='searchitem' onSubmit={(e)=>e.preventDefault()} >
        <input type='text' id='search' role='searchbox' placeholder='search box' value={search} onChange={(e)=>setsearch(e.target.value)} />
    </form>
  )
}
