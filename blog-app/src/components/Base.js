import React from 'react'
import CustomNavbar from './CustomNavbar'

function Base({title="Welcome to our website",children}) {
  return (
    <div className='container-fluid p-0'>
      <CustomNavbar />
        {children}

      <h1>This is footer</h1>
    </div>
  )
}

export default Base

