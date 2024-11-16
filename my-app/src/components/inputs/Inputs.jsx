import React from 'react'
import './Inputs.css'

const Inputs = ({ className, children }) => {
  return (
    <div className={'inputs ' + className}>
        {children}
    </div>
  )
}

export default Inputs