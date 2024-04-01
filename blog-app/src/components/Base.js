import React from 'react'
import CustomNavbar from './CustomNavbar'

function Base({title="Welcome to our website",children}) {
  return (
    <div className='container-fluid p-0'>
      <CustomNavbar />
        {children}

      
    </div>
  )
}

export default Base

