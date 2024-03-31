import React from 'react'

const Footer = () => {
    const date=new Date();
  return (
    <div className='fixed bottom-0'>copy right &copy; {date.getFullYear()} </div>
  )
}

export default Footer;