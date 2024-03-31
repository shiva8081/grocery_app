import React from 'react';

const Header = (props) => {
    return (
        <div className='bg-orange-400 text-cyan-300'>
           {props.title}
        </div>
    );
}

export default Header;