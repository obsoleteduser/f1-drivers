import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>© {new Date().getFullYear()}, All Rights Reserved</footer>
  )
}
