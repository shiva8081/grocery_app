import React from 'react'

const Footer = () => {
    const date=new Date();
  return (
    <div>copy right &copy; {date.getFullYear()} </div>
  )
}

export default Footer;