import React from 'react';

const Header = (props) => {
    return (
        <div className='bg-orange-400 text-white h-11 text-center p-3 text-lg '>
           {props.title}
        </div>
    );
}

export default Header;